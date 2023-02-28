import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {RegisterFacade} from "../data-store/register-store/register.facade";
import {RegisterStatus} from "../config/enum";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoGuard implements CanActivate {
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
        if (data && data.registerStatus !== RegisterStatus.OPR_REJECTED) this.router.navigate(['/status'])
        return true
      })
    )

  }

}
