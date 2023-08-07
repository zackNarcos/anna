import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, switchMap} from 'rxjs';
import {AdminService} from "@anna/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private adminService: AdminService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.adminService.isAuthentified()
      .pipe(
        switchMap((isAuthentified) => {
          if (isAuthentified) {
            const token = localStorage.getItem('admin-token');
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            });
          }
          return next.handle(request);
        }),
        catchError((err) => {
          console.log(err)
          return next.handle(request);
        })
      );

    return next.handle(request);
  }
}
