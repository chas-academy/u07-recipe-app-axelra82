import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/auth.service';
import { TokenService } from '../../../shared/token.service';
import { FormBuilder, FormGroup } from "@angular/forms";

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  
  profile: User;
  recipeLists: any;
  loading: boolean = true;
  haveLists: boolean = false;
  createListForm: FormGroup;
  errors = null;
  
  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private token: TokenService,
  ) {
    this.authService.profile().subscribe((data:any) => {
      this.profile = data;
    })
    this.createListForm = this.fb.group({
      name: [],
    })
  }

  ngOnInit() {
    this.authService.recipeLists().subscribe((data:any) => {
      this.recipeLists = data;
      this.loading = false;
      // If data is greater than 0 set haveLists to true
      if(data.length > 0){
        this.haveLists = true;
      }
    })
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
  
  deleteList(listId: String, listName: String) {
    if(this.token.isLoggedIn()){
      const verify = confirm(`Are you sure you want to delete the list "${listName}"? This action can't be undon.`)
      
      if(verify){
        this.authService.deleteRecipeList(listId).subscribe(
          () => {
            // Removed object from view for better UX
            this.recipeLists.splice(this.recipeLists.findIndex(list => list.id === listId));

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
}