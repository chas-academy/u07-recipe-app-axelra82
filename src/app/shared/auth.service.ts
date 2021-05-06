import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.doRequest('post', 'register', user, false);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.doRequest('post', 'login', user, false);
  }

  // Access user profile
  profile(): Observable<any> {
    return this.doRequest('get', 'profile');
  }
  
  // Get recipe lists
  listRecipeLists(): Observable<any> {
    return this.doRequest('get', 'recipelists');
  }
  
  // Get recipe lists
  getRecipeList(listId: string): Observable<any> {
    return this.doRequest('get', `recipelist/${listId}`);
  }
  
  // Create recipe lists
  createRecipeList(recipeList: RecipeList): Observable<any> {
    return this.doRequest('post', 'recipelist', recipeList);
  }
  
  // Update recipe lists
  updateRecipeList(listId: string, newRecipeList: object): Observable<any> {
    return this.doRequest('put', `recipelist/${listId}`, newRecipeList);
  }
  
  // Delete recipe lists
  deleteRecipeList(listId: String): Observable<any> {
    return this.doRequest('delete', `recipelist/${listId}`);
  }

  doRequest(action = '', endpoint = '', body = {}, autHeader = true){
    const headers = new HttpHeaders().set('InterceptorAuth', '');
    
    // Post and put need body in request
    if(action === 'post' || action === 'put'){
      if(autHeader){
        return this.http[action](`${environment.AUTH_API_URL}/${endpoint}`, body, { headers });
      }else{
        // Login and register don't have auth
        return this.http[action](`${environment.AUTH_API_URL}/${endpoint}`, body);
      }
    }
    
    // Default for get and delete
    return this.http[action](`${environment.AUTH_API_URL}/${endpoint}`, { headers });
  }
}