import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IList} from "../model/interface/list";
import {ICardTypeRes} from "../model/interface/card-type-res.interface";
import {FetchCardTypeDTO} from "../model/DTO/fetch-card-type.DTO";

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
    return this.http.get<IList<ICardTypeRes>>(`${this.baseUrl}api/card-type/list`).toPromise()
  }

  async fetchCardType(payload: FetchCardTypeDTO): Promise<ICardTypeRes> {
    return this.http.get<ICardTypeRes>(`${this.baseUrl}api/card-type/${payload.id}`).toPromise()
  }
}
