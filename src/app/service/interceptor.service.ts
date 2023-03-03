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
      const token = this.tokenStorageService.getToken();
      // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIwOTEyNTAzMjg2NiIsIm1vYmlsZU51bWJlciI6IjA5MTI1MDMyODY2IiwiaWF0IjoxODE2MjM5MDIyfQ.RdZGuQelu3KT2eApE6dgt76hbUgYaEkdBR2W3oowHq_IwlRcBPLbKXGu5uCuh82pMQPB4-TUpeSm_qEDHSQQDQSdentK7JSefE9QqNyKPVRsH8WExHpRrDixHu3VDYe7nPTF5_iDrnoIuRgO_oCNPEkaBmMvONcf0wlAzmRDdrZyHbM4GliIl_dKhDo1ITFj5XRjLHmDGyu5Fzi2OdeUEf93YCuszngbs6n3lZS_GZrr9C5K7-8N6lB795Q0vIjBbVfQMrdzW2tp0CFEnHB5WDNRJL-ceKCw5TsWb7tMLHXpwrbsf1j6RNXIDJewEbv2tg7Rb6_46Rc6ZhujXRcZTQ'
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
