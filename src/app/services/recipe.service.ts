import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Spareribs', 'Yummy spareribs.'
      , 'https://i0.wp.com/www.bbq-nl.com/wp-content/uploads/2018/12/easterwoodribs-2.jpg?resize=800%2C533&ssl=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Burger', 'This is a tasty burger.'
      , 'https://images1.persgroep.net/rcs/opQj18UpPPsVbevsctIM_SLw_EI/diocontent/160503987/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }
}
