import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    // They will need to use their own userService for this (need save the token there after login)
    constructor() { }

    // Parameters : 
    // request : Represents the request object which is on his way to the server
    // getting the request enables us to manipulate it.
    // next : Maybe we have multiple interceptors... so calling next sends the request
    // to the next interceptor (if exists)
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string | null 
        token = localStorage.getItem("token");

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }

        return next.handle(request);
    }
}
