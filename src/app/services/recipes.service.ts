// Our API service will handle user input and get data
// from meal database which we can later filter
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealdbService {
  // https://www.themealdb.com/api.php
  api = `https://www.themealdb.com/api/json/v1/${environment.REAPP_MEALDB_API_KEY}`;

  endpoints = {
    search: {
      name: `${this.api}/search.php?s=`,
      id: `${this.api}/lookup.php?i=`
    },
    list: {
      categories: `${this.api}/search.php?categories`,
    },
    random: {
      categories: `${this.api}/search.php?random`,
    }
  };
  
  constructor(private http:HttpClient) { }

  // API GET request
  list(str:string): Observable<any> {
    const url = `${this.endpoints.search.name}${str}`;
    
    // Response from request
    const response = this.http.get<any>(url);
    return response;
  }
  
  single(id:string): Observable<any> {
    const url = `${this.endpoints.search.id}${id}`;
        
    // Response from request
    const response = this.http.get<any>(url);
    return response;
  }
}

