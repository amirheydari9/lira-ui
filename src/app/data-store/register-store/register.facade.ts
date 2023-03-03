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
import {RegisterStatus} from "../../config/enum";
import {preRegisterUserData} from "../../config/key";
import {StorageService} from "../../service/storage.service";


@Injectable({
  providedIn: 'root'
})
export class RegisterFacade {

  constructor(
    private registerService: RegisterService,
    private storageService: StorageService,
  ) {
  }

  @Select(RegisterState.inquiryRegister) inquiryRegister$: Observable<IInquiryRegisterRes>

  @Dispatch()
  async inquiryRegister() {
    const data = await this.registerService.inquiryRegister()
    if (data.registerStatus === RegisterStatus.OPR_REJECTED) {
      this.storageService.setSessionStorage(preRegisterUserData, data)
    }
    return new InquiryRegisterAction(data)
  }

  @Dispatch()
  async register(payload: RegisterDTO) {
    const data = await this.registerService.register(payload)
    this.storageService.removeSessionStorage(preRegisterUserData)
    return [new InquiryRegisterAction(data), new Navigate(['/status'])]
  }

  @Dispatch()
  async confirmAddress(payload: ConfirmAddressDTO) {
    const data = await this.registerService.confirmAddress(payload)
    return [new InquiryRegisterAction(data), new Navigate(['/register/payment'])]
  }

  @Dispatch()
  async confirmHotelAddress(payload: ConfirmHotelAddressDTO) {
    const data = await this.registerService.confirmHotelAddress(payload)
    return [new InquiryRegisterAction(data), new Navigate(['/status'])]
  }

}
