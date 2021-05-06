import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  tokenItemName = 'recipe_app_token';

  private issuer = {
    login: `${environment.AUTH_API_URL}/login`,
    register: `${environment.AUTH_API_URL}/register`
  }

  constructor() { }

  handleData(token){
    localStorage.setItem(this.tokenItemName, token);
  }

  getToken(){
    return localStorage.getItem(this.tokenItemName);
  }

  removeProtocol(url: string): string{
    return url.replace(/([http|https]*:\/\/)(.*)/g, "$2");
  }

  // Verify the token
  isValidToken(){
     const token = this.getToken();

     if(token){
       const payload = this.payload(token);
       // Get timestamp now
       const now = Math.floor(Date.now() / 1000);
       // If now less than token expire at
       const isActive = now < payload.exp;       
       const issuerTest = Object.values(this.issuer).some(issuer => this.removeProtocol(issuer) === this.removeProtocol(payload.iss));
       
       if(payload && isActive && issuerTest){
         return  true;
       }
       
       return false;
     }
  }

  payload(token: string) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken(){
    localStorage.removeItem(this.tokenItemName);
  }
}