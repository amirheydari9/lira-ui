import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IGetTokenRes} from "../model/interface/get-token-res.interface";
import {PaymentCallbackDTO} from "../model/DTO/payment-callback.DTO";
import {IPaymentCallbackRes} from "../model/interface/payment-callback-res.interface";

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
    return this.http.get<IGetTokenRes>(`${this.baseUrl}api/lira/payment/register-payment`).toPromise()
  }

  async paymentCallBack(payload: PaymentCallbackDTO): Promise<IPaymentCallbackRes> {

    const body = new URLSearchParams();
    body.set('MID', payload.MID.toString())
    body.set('State', payload.State)
    body.set('Status', payload.Status.toString())
    body.set('Rrn', payload.Rrn)
    body.set('RefNum', payload.RefNum)
    body.set('ResNum', payload.ResNum)
    body.set('TerminalId', payload.TerminalId)
    body.set('TraceNo', payload.TraceNo)
    body.set('Amount', payload.Amount.toString())
    body.set('AffectiveAmount', payload.AffectiveAmount.toString())
    body.set('Wage', payload.Wage.toString())
    body.set('SecurePan', payload.SecurePan)
    body.set('Token', payload.Token)
    body.set('HashedCardNumber', payload.HashedCardNumber)

    return this.http.post<IPaymentCallbackRes>(`${this.baseUrl}api/lira/payment/payment-call-back`,
      body,
      {headers: {"Content-type": "application/x-www-form-urlencoded"}}).toPromise()
  }
}
