import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  TOKEN_KEY = 'hampaToken';

  constructor(
    private storageService: StorageService,
    private cookieService: CookieService
  ) {
  }

  public signOut(): void {
    this.cookieService.delete(this.TOKEN_KEY)
    this.storageService.removeLocalStorage('view-set-password')
  }

  public saveToken(token: string): void {
    // window.sessionStorage.removeItem(this.TOKEN_KEY);
    // window.sessionStorage.setItem(this.TOKEN_KEY, token);

    this.cookieService.delete(this.TOKEN_KEY)
    this.cookieService.set(this.TOKEN_KEY, token, {path: '/'})

    // const user = this.getUser();
    // if (user.id) {
    //   this.saveUser({...user, accessToken: token});
    // }
  }

  public getToken(): string | null {
    // return window.sessionStorage.getItem(this.TOKEN_KEY);
    return this.cookieService.get(this.TOKEN_KEY)
  }

  // public saveRefreshToken(refreshToken: string): void {
  //   window.sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
  //   window.sessionStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  // }

  // public getRefreshToken(): string | null {
  //   return window.sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  // }
  //
  // public saveUser(user: any): void {
  //   window.sessionStorage.removeItem(this.USER_KEY);
  //   window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  // }

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(this.USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return null;
  // }

  public parseJwt() {
    const token = this.getToken()
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  public isPasswordSet() {
    return this.parseJwt().isPasswordSet
  }

}
