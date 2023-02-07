import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private pageTitle: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private title: Title
  ) {
  }

  getTitle(): Observable<string> {
    return this.pageTitle.asObservable()
  }

  setTitle(title: string): void {
    this.pageTitle.next(title)
    this.title.setTitle(title)
  }
}
