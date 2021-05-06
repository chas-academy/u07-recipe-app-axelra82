import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { TokenService } from '../../../shared/token.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SaveBtnService } from '../../../services/save-btn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

  recipeLists: any;
  isProfile: boolean = false;
  loading: boolean = true;
  haveLists: boolean = false;
  selectedList: any;
  listSelected: boolean = false;
  createListForm: FormGroup;
  errors = null;
  currentData: any = [];

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private token: TokenService,
    private saveBtnService: SaveBtnService,
    private router: Router,
  ) {
    this.createListForm = this.fb.group({
      name: [],
    })
    // Check if we are on the profile page
    this.isProfile = this.router.url === '/profile';
  }

  ngOnInit() {
    if(this.token.isLoggedIn()){
      this.authService.listRecipeLists().subscribe((data:any) => {
        this.recipeLists = data;
        this.loading = false;
        // If data is greater than 0 set haveLists to true
        if(data.length > 0){
          this.haveLists = true;
        }
      });
    }
  }

  changeListSelection(){
    if(!this.listSelected){
      this.listSelected = true;
    }
  }

  removeRecipe(recipe: any){
    const recipeId = recipe.id;
    const recipeName = recipe.name;
    const listId = this.selectedList.id;
    const listName = this.selectedList.name;

    const confirmDelete = confirm(`This will remove the recipe "${recipeName}" from "${listName}". Are you sure you want to continue?`);

    if(recipeId && listId && confirmDelete && this.token.isLoggedIn()){
      this.authService.getRecipeList(listId).subscribe(
        list => {
          this.currentData = JSON.parse(list.recipes);
          this.currentData = this.currentData.filter((recipe: any) => recipe.id !== recipeId);
        },
        error => {
          console.log(error);
        },
        () => {
          this.authService.updateRecipeList(listId, {recipes: this.currentData}).subscribe(
            () => { },
            error => {
              console.log(error);
            },
            () => {
              this.listSelected = false;
              // Removed object from view for better UX
              this.selectedList.recipes = JSON.stringify(this.currentData);
            }
          );
        }
      )
    }
  }

  addRecipe(){
    const listId = this.selectedList.id;
    const recipeData = this.saveBtnService.getData();
   
    if(listId && recipeData && this.token.isLoggedIn()){
      this.authService.getRecipeList(listId).subscribe(
          list => {
            this.currentData = JSON.parse(list.recipes);
            const isUnique = !this.currentData.some((recipe: any) => recipe.id === recipeData.id);

            if(isUnique){
              this.currentData.push(recipeData);
            }else{
              alert(`The recipe '${recipeData.name}' is already in the list '${list.name}'. You can only save a recipe once in a list.`)
            }
          },
          error => {
            console.log(error);
          },
          () => {
            this.authService.updateRecipeList(listId, {recipes: this.currentData}).subscribe(
              () => { },
              error => {
                console.log(error);
              },
              () => {
                this.listSelected = false;
                // Add object to view for better UX
                this.selectedList.recipes = JSON.stringify(this.currentData);
              }
            )
          }
        )
      
    }else if(recipeData && this.token.isLoggedIn()){
      alert('Oops... Looks like you forgot to select a list.');
    }else{
      alert('Something went wrong. Refresh page and try again.');
    }
  }

  createList() {
    // User should be logged in at this stage but
    // we will make sure by using state in token
    if(this.token.isLoggedIn()){
      this.authService.createRecipeList(this.createListForm.value).subscribe(
        result => {
          // Push new object for better UX
          this.recipeLists.push(result.object);
          
          if(!this.haveLists){
            this.haveLists = true;
          }
        },
        error => {
          console.log(error);
          
          this.errors = error.error.errors;
        },
        () => {
          // Reset form
          this.createListForm.reset()
        }
      )
    }
  }
  
  deleteList() {
    const listId = this.selectedList.id;
    const listName = this.selectedList.name;
    const confirmDelete = confirm(`Are you sure you want to delete the list "${listName}"? This action can't be undon.`)

    if(this.token.isLoggedIn() && confirmDelete){ 
      this.authService.deleteRecipeList(listId).subscribe(
        () => {
          // Removed object from view for better UX
          this.recipeLists.splice(this.recipeLists.findIndex((list: any) => list.id === listId));

          if(this.recipeLists.length === 0){
            this.haveLists = false;
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}