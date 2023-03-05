import {Injectable} from "@angular/core";
import {SubmitTrxDTO} from "../../model/DTO/submit-trx.DTO";
import {RegisterFacade} from "../register-store/register.facade";
import {Navigate} from "@ngxs/router-plugin";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {IpgService} from "../../api/ipg.service";
import {StorageService} from "../../service/storage.service";
import {transactionDetails} from "../../config/key";


@Injectable({
  providedIn: 'root'
})
export class IpgFacade {

  constructor(
    private ipgService: IpgService,
    private registerFacade: RegisterFacade,
    private storageService: StorageService
  ) {
  }

  @Dispatch()
  async submitTrx(payload: SubmitTrxDTO) {
    const data = await this.ipgService.submitTrx(payload)
    await this.registerFacade.inquiryRegister()
    this.storageService.setSessionStorage(transactionDetails, data)
    return new Navigate(['/payment-status'])
  }
}
