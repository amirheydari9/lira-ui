import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  TOKEN_KEY = 'liraToken';

  constructor(
    private storageService: StorageService,
  ) {
  }

  public signOut(): void {
    this.storageService.removeSessionStorage(this.TOKEN_KEY);

  }

  public saveToken(token: string): void {
    this.storageService.removeSessionStorage(this.TOKEN_KEY);
    this.storageService.setSessionStorage(this.TOKEN_KEY, token)
  }

  public getToken(): string | null {
    return this.storageService.getSessionStorage(this.TOKEN_KEY)
  }

}
