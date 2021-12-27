import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('Cache-Control', 'no-cache').set('Pragma', 'no-cache'),
      // withCredentials: true
    });
    return next.handle(req).pipe(
      tap((res) => {
        if (res instanceof HttpResponse && res.status === 200) {
        }
      })
    );
  }
}
