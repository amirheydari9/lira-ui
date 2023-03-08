import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {RegisterFacade} from "../data-store/register-store/register.facade";
import {RegisterStatus} from "../config/enum";

@Injectable({
  providedIn: 'root'
})
export class StatusGuard implements CanActivate {

  constructor(
    private registerFacade: RegisterFacade,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.registerFacade.inquiryRegister$.pipe(
      map((data) => {
        if (!data) this.router.navigate(['/'])
        if (data && data.registerStatus === RegisterStatus.ADDRESS_CONFIRMED) this.router.navigate(['/register/payment'])
        if (data && data.registerStatus === RegisterStatus.PAYMENT_DONE) this.router.navigate(['/register/hotel-address'])
        return true
      })
    )
  }

}
