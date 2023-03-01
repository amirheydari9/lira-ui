import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {SubmitTrxDTO} from "../model/DTO/submit-trx.DTO";
import {ISubmitTrxRes} from "../model/interface/submit-trx-res.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IpgService {

  ipgUrl = environment.ipgUrl

  constructor(
    private http: HttpClient
  ) {
  }

  async submitTrx(payload: SubmitTrxDTO): Promise<ISubmitTrxRes> {

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

    return this.http.post<ISubmitTrxRes>(
      `${this.ipgUrl}api/ipg/submit-trx`,
      body,
      {headers: {"Content-type": "application/x-www-form-urlencoded"}}
    ).toPromise()
  }
}
