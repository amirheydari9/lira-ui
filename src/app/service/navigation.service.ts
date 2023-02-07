import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = []

  constructor(
    private router: Router,
  ) {
  }

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  public getHistory(): string[] {
    return this.history;
  }

  public async goBack(): Promise<void> {
    this.history.pop();
    await this.router.navigateByUrl(this.history.length > 0 ? this.history[this.history.length - 1] : '/')
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2];
    }

    return '';
  }
}
