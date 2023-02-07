import {Injectable} from '@angular/core';
import {Route} from "@angular/router";
import {map, Observable, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService{

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const loadRoute = (delay) => delay > 0 ? timer(delay * 1000).pipe(map(() => load())) : load();
    const delay = route.data && route.data['loadAfterSeconds'] ? route.data['loadAfterSeconds'] : 5;
    return loadRoute(delay);

  }
}
