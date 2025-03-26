import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('AuthInterceptor - URL:', request.url, 'Token:', token);

    if (token && (request.url.includes('/api/admin') || request.url.includes('/api/user') || request.url.includes('/api/logout'))) {
      const clonedRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      console.log('Sending request with Authorization:', clonedRequest.headers.get('Authorization'));
      return next.handle(clonedRequest);
    }
    console.log('No token or URL mismatch - Sending request without Authorization');
    return next.handle(request);
  }
}