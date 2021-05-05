import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveBtnService {

  private data: any;

  constructor() { }
 
  setData(recipe: any){
    this.data = recipe;
  }

  getData(){
    return this.data;
  }
}