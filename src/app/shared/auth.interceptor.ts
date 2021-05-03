import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Array of pages that should use intercepter
        const authRoutes = [
            'profile',
            'login',
            'logout',
            'signup',
        ];
        // Match auth routes array in request url
        const inAuthRoute = authRoutes.some(r => req.url.includes(r));
        // If in auth routes, add auth header        
        if(inAuthRoute){
            const accessToken = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + accessToken
                }
            });
        }
        return next.handle(req);
    }
}