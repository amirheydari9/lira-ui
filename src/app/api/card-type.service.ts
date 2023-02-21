import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IList} from "../model/interface/list";
import {ICardTypeRes} from "../model/interface/card-type-res.interface";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardTypeService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
  }

  async fetchCardTypeList(): Promise<IList<ICardTypeRes>> {
    return of(
      {
        "content": [
          {
            "id": 1,
            "title": "pink",
            "cost": 10000
          },
          {
            "id": 2,
            "title": "gold",
            "cost": 100000
          }
        ],
        "page": 0,
        "size": 20,
        "totalElements": 2
      }
    ).pipe().toPromise()
    // return this.http.get<IList<ICardTypeRes>>(`${this.baseUrl}api/card-type/list`).toPromise()
  }
}
