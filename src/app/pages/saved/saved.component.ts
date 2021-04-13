import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as RecipeActions from '../../actions/recipe.actions';
import { Recipes } from '../../models/recipes.model';

interface AppState {
  recipes: Recipes;
}

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  
  clientStore = JSON.parse(localStorage.getItem('nomnombase'));
  haveResults: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    
    // Get localStorage or create empty array if empty
    // Use filter to weed out null objects
    const cleanArray = this.clientStore &&
    Array.isArray(this.clientStore) ?
    this.clientStore.filter(r => r)
    :
    [];
    
    // Make sure our new clean array has content
    if(cleanArray.length > 0){

      // Dispatch (send/post) localStorage to our global store 
      this.store.dispatch(new RecipeActions.RecipeList(cleanArray));

      // Set results to true 
      this.haveResults = true;
    }
  }
}
