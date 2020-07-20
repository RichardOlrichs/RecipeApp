import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(private dss: DataStorageService) { }

  onSaveData() {
    this.dss.storeRecipes();
  }

  onFetchData () {
    this.dss.fetchRecipes().subscribe();
  }

  ngOnInit() {
  }
}
