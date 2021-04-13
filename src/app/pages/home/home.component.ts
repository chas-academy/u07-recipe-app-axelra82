import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute  } from '@angular/router';

import { Store } from '@ngrx/store';

import * as RecipeActions from '../../actions/recipe.actions';
import { Recipes } from '../../models/recipes.model';

import { MealdbService } from '../../services/recipes.service';

interface AppState {
  recipes: Recipes;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  searchString: string;
  isSearch: boolean = false;
  resultCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private mealdbService:MealdbService,
  ) { }

  ngOnInit(): void {

    // Subcriber to uri search parameters from route
    this.route.queryParams.subscribe(params => {
      // If there is a search set to true
      this.isSearch = params.search && true;
      // Extract search string
      this.searchString = params.search
      // Make sure we have a string to search
      if(this.searchString){
        // Subscribe to mealDB service
        this.mealdbService.list(this.searchString).subscribe(
          data => {
            // Dispatch (send/post) mealDB service result to our global store 
            this.store.dispatch(new RecipeActions.RecipeList(data.meals));
            // Set the result count from the result length
            this.resultCount = data.meals ? data.meals.length : 0;
          }
        );
      }
    });
  }
}