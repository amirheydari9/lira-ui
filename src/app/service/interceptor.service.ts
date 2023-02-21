import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {catchError, filter, finalize, map, Observable, takeUntil, throwError} from "rxjs";
import {TokenStorageService} from "./token-storage.service";
import {NavigationEnd, Router} from "@angular/router";
import {AppConfigService} from "./app-config.service";

@Injectable()
export class InterceptorService implements HttpInterceptor {

  TOKEN_HEADER_KEY = 'Authorization';

  constructor(
    private tokenStorageService: TokenStorageService,
    // private notificationService: NotificationService,
    private router: Router,
    private appConfigService: AppConfigService,
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.appConfigService.cancelPendingRequests();
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    if (!request.url.startsWith('/assets')) {
      this.appConfigService.setLoading(true)
      const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIwOTM2NDkzNjQwMSIsIm1vYmlsZU51bWJlciI6IjA5MzY0OTM2NDAxIiwiaWF0IjoxODE2MjM5MDIyfQ.UNAqgYfXrpbS_fYRsQZFoh8F7WpBqkMfUE3cwXj5bxEHJGe0oHxzTznAMh073j33LdSX6YO-VxhVqJj5Zz5zH2AWD0G_764i5S4AgYSKIcrRklDLgib3hjemF6macHkE9TBFac4chEijwBcu76mIl-Oug8Rx-1OUkvz7oNQxt7q6kfl-5q7DulTxtxghC2KOnNwNbOZQ523vo3u77hFjzCPVglj2w-XybBjZfSdFYFdVg8POs39YOI9VmERFE5VY3o8LXR8phjPWiX0dFDtVKF8EB6rS0q5GEWmuxKuqks3hjloiiipez1u9y2_Qu6lvXg00LOMO3MobOZCX-oVkNQ';
      // const token = this.tokenStorageService.getToken();
      if (token) {
        request = this.addTokenHeader(request, token)
      }
      return next.handle(request).pipe(
        takeUntil(this.appConfigService.onCancelPendingRequests()),
        filter(res => res instanceof HttpResponse),
        map((res: HttpResponse<any>) => res.clone({body: res.body.body})),
        catchError(error => {
          if (error instanceof HttpErrorResponse) this.errorHandler(error)
          return throwError(error);
        }),
        finalize(() => this.appConfigService.setLoading(false))
      )
    } else {
      return next.handle(request);
    }
  }

  private addTokenHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({headers: request.headers.set(this.TOKEN_HEADER_KEY, 'Bearer ' + token)});
  }

  private errorHandler(error: HttpErrorResponse) {
    // if (error.status === 400) {
    //   this.notificationService.open({
    //     code: error.error.code,
    //     description: ERROR_MESSAGES[error.error.code] ? ERROR_MESSAGES[error.error.code] : error.error.message
    //   })
    // } else if (error.status === 401) {
    //   if (error.error.code === 4016) {
    //     this.notificationService.open({
    //       code: error.error.code,
    //       description: ERROR_MESSAGES[error.error.code]
    //     });
    //   }
    //   this.authFacade.logout(new LogoutDTO(error.error.code !== 4016))
    // } else if (error.status === 403) {
    //   this.router.navigate(['/error/not-allowed'])
    // } else if (error.status === 404) {
    //   this.router.navigate(['/error/not-found'])
    // } else if (error.status === 500) {
    //   if (error.error.message === 'Internal Server Error') {
    //     this.router.navigate(['/error/server-error'])
    //   } else {
    //     this.notificationService.open({
    //       code: error.error.code,
    //       description: ERROR_MESSAGES[error.error.code] ? ERROR_MESSAGES[error.error.code] : 'عدم برقراری ارتباط'
    //     });
    //   }
    // } else if (error.status === 504 || error.status === 502) {
    //   this.router.navigate(['/error/server-error'])
    // }
  }
}
