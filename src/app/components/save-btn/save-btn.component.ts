import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-save-btn',
  templateUrl: './save-btn.component.html',
  styleUrls: ['./save-btn.component.scss']
})
export class SaveBtnComponent implements OnInit {

  @Input() saveBtnInput: any;

  isSaved: boolean;
  recipe: any;
  
  constructor() { }

  ngOnInit(): void {
    this.isSaved = this.saveBtnInput.isSaved;
    this.recipe = this.saveBtnInput.recipe;
  }

  parsedLocal(){
    return JSON.parse(localStorage.getItem('nomnombase'));
  }

  saveToList(){
    let savedRecipes = this.parsedLocal();
    if(savedRecipes === null){
      savedRecipes = [];
    }

    savedRecipes.push(this.recipe);
    localStorage.setItem('nomnombase', JSON.stringify(savedRecipes));
    this.isSaved = true;
  }

  removeFromList(){
    let savedRecipes = this.parsedLocal();
    savedRecipes = savedRecipes.filter((e:any) => e.idMeal !== this.recipe.idMeal);
    localStorage.setItem('nomnombase', JSON.stringify(savedRecipes));
    this.isSaved = false;
  }
}
