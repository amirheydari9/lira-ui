import {Injectable} from "@angular/core";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {RegisterService} from "../../api/register.service";
import {RegisterDTO} from "../../model/DTO/register.DTO";
import {ConfirmAddressDTO} from "../../model/DTO/confirm-address.DTO";
import {ConfirmHotelAddressDTO} from "../../model/DTO/confirm-hotel-address.DTO";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {InquiryRegisterAction, RegisterState} from "./register.store";
import {IInquiryRegisterRes} from "../../model/interface/inquiry-register-res.interface";
import {Navigate} from "@ngxs/router-plugin";


@Injectable({
  providedIn: 'root'
})
export class RegisterFacade {

  constructor(
    private registerService: RegisterService,
  ) {
  }

  @Select(RegisterState.inquiryRegister) inquiryRegister$: Observable<IInquiryRegisterRes>


  async register(payload: RegisterDTO) {
    await this.registerService.register(payload)
  }

  @Dispatch()
  async inquiryRegister() {
    const data = await this.registerService.inquiryRegister()
    return new InquiryRegisterAction(data)
  }

  @Dispatch()
  async confirmAddress(payload: ConfirmAddressDTO) {
    const data = await this.registerService.confirmAddress(payload)
    return [new InquiryRegisterAction(data), new Navigate(['/register/payment'])]
  }

  async confirmHotelAddress(payload: ConfirmHotelAddressDTO) {
    await this.registerService.confirmHotelAddress(payload)
  }

}
