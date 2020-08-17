import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  fbUrl = 'https://recipeappbackend-5f297.firebaseio.com';

  constructor(private http: HttpClient, private rs: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.rs.getRecipes();
    this.http.put(
      `${this.fbUrl}/recipes.json`,
      recipes
    ).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
      `${this.fbUrl}/recipes.json`
    ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap((recipes) => {
        this.rs.setRecipes(recipes);
      })
    );
  }
}
