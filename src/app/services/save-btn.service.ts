import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveBtnService {

  constructor() { }
 
  saveBtnData(recipe: any){
    // Parse localStorage target 'nomnombase'
    const clientStore = JSON.parse(localStorage.getItem('nomnombase'));

    // If localStorage doesn't exist, then there can't be any saved recipes
    // so set it to false. Otherwise do array some (returns boolean) to see
    // if recipe is in saved list using object key idMeal value
    const isSaved = !clientStore ? false : clientStore.some((lookUp: any) => lookUp.idMeal === recipe.idMeal);

    // Return object with recipe object and boolean state
    return {
      recipe,
      isSaved
    };
  }
}

