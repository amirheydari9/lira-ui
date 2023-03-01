import {Injectable} from "@angular/core";
import {SubmitTrxDTO} from "../../model/DTO/submit-trx.DTO";
import {RegisterFacade} from "../register-store/register.facade";
import {Navigate} from "@ngxs/router-plugin";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {IpgService} from "../../api/ipg.service";


@Injectable({
  providedIn: 'root'
})
export class IpgFacade {

  constructor(
    private ipgService: IpgService,
    private registerFacade: RegisterFacade
  ) {
  }

  @Dispatch()
  async submitTrx(payload: SubmitTrxDTO) {
    await this.ipgService.submitTrx(payload)
    await this.registerFacade.inquiryRegister()
    return new Navigate(['/status'])
  }
}
