import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  collapsed = true;
  isAuthenticated = false;

  constructor(private dss: DataStorageService, private authService: AuthService) { }

  onSaveData() {
    this.dss.storeRecipes();
  }

  onFetchData() {
    this.dss.fetchRecipes().subscribe();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
