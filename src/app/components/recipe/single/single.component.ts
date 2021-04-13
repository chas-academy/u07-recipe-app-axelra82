import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MealdbService } from '../../../services/recipes.service';
import { SaveBtnService } from '../../../services/save-btn.service';

import { Recipes } from '../../../models/recipes.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  recipeData: Recipes['single'];
  details: object;
  permalink: string;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealdbService,
    private saveBtnService: SaveBtnService,
  ) { }

  // Function for recipe ingredient/measurement extraction to array
  recipeDetails(recipe: object){

    // Create empty array
    const detailsArray = [];

    // We know the number of items to loop, so lets set it to 20
    for(let i=1; i < 20; i++){
      // Extract each item pair using dynamic property keys
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      // Skip items that have neither value
      if(ingredient || measure){
        
        // Create inner array for ingredient and measurement
        const lineArray = [
          ingredient,
          measure,
        ];

        // Push result to detailsArray
        detailsArray.push(lineArray);
      }
    }

    this.details = detailsArray;
  }

  ngOnInit() {
    // Rather than storing existing recipe data from search in state we
    // use the recipe ID using the route parameter id.
    // This gives us a premalink like functionallity as the recipe data
    // isn't reliant on user interaction to populate state.
    this.permalink = this.route.snapshot.params.id;
    this.mealService.single(this.permalink).subscribe(
      data => {
        this.recipeData = data.meals[0];
        this.recipeDetails(this.recipeData);
      }
    )
  }
}
