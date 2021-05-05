import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private tokenService: TokenService,
        public router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Array of routes that should use intercepter
        const authRoutes = [
            'profile',
            'login',
            'logout',
            'signup',
            'recipelists',
            'recipelist',
        ];
        // Match auth routes array in request url
        const inAuthRoute = authRoutes.some(r => req.url.includes(r));
        // If in auth routes, add auth header        
        if(inAuthRoute){
            const accessToken = this.tokenService.getToken();
            const isValidToken = this.tokenService.isValidToken();
                        
            if(isValidToken){
                req = req.clone({
                    setHeaders: {
                        Authorization: "Bearer " + accessToken
                    }
                });
            }else{
                this.router.navigate(['login']);
            }
        }
        return next.handle(req);
    }
}