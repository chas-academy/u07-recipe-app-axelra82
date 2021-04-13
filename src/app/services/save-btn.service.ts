import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveBtnService {

  constructor() { }
 
  saveBtnData(recipe: any){
    // Parse localStorage target 'nomnombase'
    const clientStore = JSON.parse(localStorage.getItem('nomnombase'));
    
    // If localStorage is null, then there can't be any saved recipes
    // so set it to false. Otherwise do array some (returns boolean) to see
    // if recipe is in saved list using object key idMeal value (use && to make sure
    // lookUp object exists)
    const isSaved = clientStore === null
    ? false
    :
    clientStore.some(
      (lookUp: any) => lookUp && lookUp.idMeal === recipe.idMeal
    );

    // Return object with recipe object and boolean state
    return {
      isSaved,
      recipe,
    };
  }
}