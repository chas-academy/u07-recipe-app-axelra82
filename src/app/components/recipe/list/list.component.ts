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
  recipesData: Recipes[];
  haveResults: boolean = false;

  constructor(
    private store: Store<AppState>,
    private saveBtnService: SaveBtnService
  ) {    
    this.recipesSubscriber = this.store.select('recipes');
  }

  ngOnInit(): void {
    this.recipesSubscriber.subscribe(
      (data: any) => {
        this.recipesData = data.list;
        if(this.recipesData && this.recipesData.length !== 0){
          this.haveResults = true;
        }
        
        const filterList = data.filter;
        if(filterList.length){
          console.log(filterList);
          const filteredList = data.list.map((recipe:any) => {
            // Make sure tags has content, if content turn it into array
            const tagsArray = recipe.strTags ? recipe.strTags.toLowerCase().split(',') : [];
            const tagsTest = tagsArray.some((str: string) => filterList.includes(str));

            // let categoryTest: boolean;
            let match: boolean = false;
            
            filterList.forEach((filter: string) => {
              // tagsTest || categoryTest  
              match = tagsArray.some((str: string) => str === filter) ||
              recipe.strCategory.toLowerCase().includes(filter);  
            });

            console.log(match);

            // recipe.strCategory.toLowerCase().includes((str:string) => .includes(str));

            // console.log(recipe.strCategory);
            
            // console.log(categoryTest);
            
            // If an test results true for recipe add to filtered list
            if(match){
                return recipe;
            }

          }).filter((f: any) => f !== undefined);
          this.recipesData = filteredList;
        }
      }
    )
  }

  saveBtnInput(recipe: object){
    return this.saveBtnService.saveBtnData(recipe);
  }
}