import {Injectable} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";
import {RegisterFacade} from "../data-store/register-store/register.facade";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private tokenStorageService: TokenStorageService,
    private registerFacade: RegisterFacade,
  ) {
  }

  async load() {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    if (token) {
      this.tokenStorageService.saveToken(token)
    }
    if (this.tokenStorageService.getToken()) {
      await this.registerFacade.inquiryRegister()
    } else {
      //TODO 401
    }
  }

}
