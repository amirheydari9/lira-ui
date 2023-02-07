import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private pendingHTTPRequests$ = new Subject<void>();
  public cancelPendingRequests() {
    this.pendingHTTPRequests$.next();
  }
  public onCancelPendingRequests() {
    return this.pendingHTTPRequests$.asObservable();
  }

  private _loading$: Subject<boolean> = new Subject<boolean>();
  public setLoading(loading: boolean): void {
    this._loading$.next(loading);
  }
  public loading(): Observable<boolean> {
    return this._loading$.asObservable();
  }
}
