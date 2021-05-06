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
        // All routes that require auth must have InterceptorAuth
        // in headers. This way we can easily check if route needs
        // auth or not in a scalable way.
        if(req.headers.has('InterceptorAuth')){
            const accessToken = this.tokenService.getToken();
            const isValidToken = this.tokenService.isValidToken();
                        
            if(isValidToken){
                req = req.clone({
                    setHeaders: {
                        Authorization: "Bearer " + accessToken
                    }
                });
            }else{
                // No valid token on auth route
                // user must login
                this.router.navigate(['login']);
            }
        }
        return next.handle(req);
    }
}