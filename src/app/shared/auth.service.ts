import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

// Recipe list interface
export class RecipeList {
  name: String;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(`${environment.AUTH_API_URL}/register`, user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post(`${environment.AUTH_API_URL}/login`, user);
  }

  // Access user profile
  profile(): Observable<any> {
    return this.http.get(`${environment.AUTH_API_URL}/profile`);
  }
  
  // Access recipe lists
  recipeLists(): Observable<any> {
    return this.http.get(`${environment.AUTH_API_URL}/recipelists`);
  }
 
  // Create recipe lists
  createRecipeList(recipeList: RecipeList): Observable<any> {
    return this.http.post(`${environment.AUTH_API_URL}/recipelist`, recipeList);
  }
  
  // Delete recipe lists
  deleteRecipeList(listId: String): Observable<any> {    
    return this.http.delete(`${environment.AUTH_API_URL}/recipelist/${listId}`);
  }

}