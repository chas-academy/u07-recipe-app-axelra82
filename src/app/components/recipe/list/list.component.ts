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
  haveResults: boolean = false;

  constructor(
    private store: Store<AppState>,
    private saveBtnService: SaveBtnService
  ) {    
    this.recipesSubscriber = this.store.select('recipes');
  }

  ngOnInit(): void {
    this.recipesSubscriber.subscribe(
      data => {
        this.recipesData = data.list;
        if(this.recipesData && this.recipesData.length !== 0){
          this.haveResults = true;
        }
      }
    )
  }

  saveBtnInput(recipe: object){
    return this.saveBtnService.saveBtnData(recipe);
  }
}