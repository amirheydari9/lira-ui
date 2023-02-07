import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
  }

  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name))
  }

  removeLocalStorage(name) {
    localStorage.removeItem(name)
  }

  setSessionStorage(name, value) {
    sessionStorage.setItem(name, JSON.stringify(value))
  }

  getSessionStorage(name) {
    return JSON.parse(sessionStorage.getItem(name))
  }

  removeSessionStorage(name) {
    sessionStorage.removeItem(name)
  }
}
