import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SaveBtnService } from '../../../services/save-btn.service';

import { Store } from '@ngrx/store';

import { Recipes } from '../../../models/recipes.model';

interface AppState {
  recipes: Recipes;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipesSubscriber: Observable<Recipes>;
  recipesData: Recipes['list'];
  
  constructor(
    private store: Store<AppState>,
    private saveBtnService: SaveBtnService
  ) {    
    this.recipesSubscriber = this.store.select('recipes');
  }

  ngOnInit(): void {
    this.recipesSubscriber.subscribe(
      data => this.recipesData = data.list
    )
  }

  saveBtnData(recipe: object){
    this.saveBtnService.saveBtnData(recipe);
  }
}