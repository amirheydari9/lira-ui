import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentSuccessGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route.queryParams['MID'])
    if (
      route.queryParams.hasOwnProperty('MID') && route.queryParams['MID']
      && route.queryParams.hasOwnProperty('State') && route.queryParams['State']
      && route.queryParams.hasOwnProperty('Status') && route.queryParams['Status']
      && route.queryParams.hasOwnProperty('Rrn') && route.queryParams['Rrn']
      && route.queryParams.hasOwnProperty('RefNum') && route.queryParams['RefNum']
      && route.queryParams.hasOwnProperty('ResNum') && route.queryParams['ResNum']
      && route.queryParams.hasOwnProperty('TerminalId') && route.queryParams['TerminalId']
      && route.queryParams.hasOwnProperty('TraceNo') && route.queryParams['TraceNo']
      && route.queryParams.hasOwnProperty('Amount') && route.queryParams['Amount']
      && route.queryParams.hasOwnProperty('AffectiveAmount') && route.queryParams['AffectiveAmount']
      && route.queryParams.hasOwnProperty('Wage') && route.queryParams['Wage']
      && route.queryParams.hasOwnProperty('SecurePan') && route.queryParams['SecurePan']
      && route.queryParams.hasOwnProperty('Token') && route.queryParams['Token']
      && route.queryParams.hasOwnProperty('HashedCardNumber') && route.queryParams['HashedCardNumber']
    ) {
      return true
    }
    return this.router.navigate(['/error/not-found'])
  }

}
