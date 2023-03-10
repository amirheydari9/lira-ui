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
    // return of(
    //   {
    //     "content": [
    //       {
    //         "id": 1,
    //         "title": "pink",
    //         "cost": 10000.00,
    //         "dailyLimit": "۴۰.۰۰۰ لیر",
    //         "monthlyLimit": "۴۰.۰۰۰ لیر",
    //         "expiry": "۱ ساله",
    //         "chip": false,
    //         "atm": false,
    //         "pos": false,
    //         "ipg": false,
    //         "bills": false,
    //         "supportType": "NORMAL",
    //         "club": false,
    //         "bankingFee": false,
    //         "serviceFee": false,
    //         "pinAndGift": false,
    //         "liraAccountType": "false",
    //         "chargeLimit": false,
    //         "chargeTime": "۲۴ ساعت",
    //         "titleFa": ""
    //       },
    //       {
    //         "id": 2,
    //         "title": "gold",
    //         "cost": 100000.00,
    //         "dailyLimit": "2۰.۰۰۰ لیر",
    //         "monthlyLimit": "2۰.۰۰۰ لیر",
    //         "expiry": "۱ ساله",
    //         "chip": false,
    //         "atm": false,
    //         "pos": false,
    //         "ipg": false,
    //         "bills": false,
    //         "supportType": "VIP",
    //         "club": false,
    //         "bankingFee": false,
    //         "serviceFee": false,
    //         "pinAndGift": false,
    //         "liraAccountType": "false",
    //         "chargeLimit": false,
    //         "chargeTime": "۲۴ ساعت",
    //         "titleFa": ""
    //       }
    //     ],
    //     "page": 0,
    //     "size": 20,
    //     "totalElements": 2
    //   }
    // ).pipe(delay(600)).toPromise()
    return this.http.get<IList<ICardTypeRes>>(`${this.baseUrl}api/lira/card-type/list`).toPromise()
  }

  async fetchCardType(payload: FetchCardTypeDTO): Promise<ICardTypeRes> {
    // return of(
    //   {
    //     "id": 1,
    //     "title": "pink",
    //     "cost": 10000.00,
    //     "dailyLimit": "۴۰.۰۰۰ لیر",
    //     "monthlyLimit": "۴۰.۰۰۰ لیر",
    //     "expiry": "۱ ساله",
    //     "chip": false,
    //     "atm": false,
    //     "pos": false,
    //     "ipg": false,
    //     "bills": false,
    //     "supportType": "NORMAL",
    //     "club": false,
    //     "bankingFee": false,
    //     "serviceFee": false,
    //     "pinAndGift": false,
    //     "liraAccountType": "false",
    //     "chargeLimit": false,
    //     "chargeTime": "۲۴ ساعت",
    //     "titleFa": ""
    //   },
    // ).pipe(delay(600)).toPromise()
    return this.http.get<ICardTypeRes>(`${this.baseUrl}api/lira/card-type/${payload.id}`).toPromise()
  }
}
