import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IGetTokenRes} from "../model/interface/get-token-res.interface";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
  }

  async getToken(): Promise<IGetTokenRes> {
    return this.http.get<IGetTokenRes>(`${this.baseUrl}api/payment/register-payment`).toPromise()
  }
}
