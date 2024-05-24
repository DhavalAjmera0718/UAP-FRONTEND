import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private cookie : CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.includes('login')){
      return next.handle(request);
    }

    const cookie =this.cookie.get("Token");
    request.clone({headers:request.headers.set('Authorization','Bearer ' + cookie)})
    return next.handle(request);
  }
}
