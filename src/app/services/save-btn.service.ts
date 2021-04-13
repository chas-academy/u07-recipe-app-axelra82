import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveBtnService {

  constructor() { }
 
  saveBtnData(recipe: any){
    const clientStore = JSON.parse(localStorage.getItem('nomnombase'));

    const isSaved = !clientStore ? false : clientStore.some((lookUp: any) => lookUp.idMeal === recipe.idMeal);

    return {
      recipe,
      isSaved
    };
  }
}

