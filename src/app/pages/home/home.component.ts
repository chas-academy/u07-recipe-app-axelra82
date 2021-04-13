import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute  } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  
  recipesSubscriber: Observable<Recipes>;
  searchString: string;
  isSearch: boolean = false;
  resultCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private mealdbService:MealdbService,
  ) {
    this.recipesSubscriber = this.store.select('recipes');
  }

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


            // this.recipesSubscriber.subscribe(
            //   (data: any) => {
            //     this.recipesData = data.list;
            //     if(this.recipesData && this.recipesData.length !== 0){
            //       this.haveResults = true;
            //     }
            //     const filterList = data.filter;
            //     if(filterList.length){
            //       console.log(filterList);
            //       const filteredList = this.recipesData.map((recipe:any) => {
            //         // Make sure tags has content, if content turn it into array
            //         const tagsArray = recipe.strTags ? recipe.strTags.toLowerCase().split(',') : [];
            //         const tagsTest = tagsArray.some((str: string) => filterList.includes(str));

            //         // let categoryTest: boolean;
            //         let match: boolean = false;
                    
            //         filterList.forEach((filter: string) => {
            //           // tagsTest || categoryTest  
            //           match = tagsArray.some((str: string) => str === filter) ||
            //           recipe.strCategory.toLowerCase().includes(filter);  
            //         });

            //         console.log(match);

            //         // recipe.strCategory.toLowerCase().includes((str:string) => .includes(str));

            //         // console.log(recipe.strCategory);
                    
            //         // console.log(categoryTest);
                    
            //         // If an test results true for recipe add to filtered list
            //         if(match){
            //             return recipe;
            //         }

            //       }).filter((f: any) => f !== undefined);
            //       this.recipesData = filteredList;
            //     }
            // })
        })
      }
    });
  }
}