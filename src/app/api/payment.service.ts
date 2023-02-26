import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
  }

  async getToken(): Promise<any> {
    return this.http.get(`${this.baseUrl}api/payment/register-payment`).toPromise()
  }
}
