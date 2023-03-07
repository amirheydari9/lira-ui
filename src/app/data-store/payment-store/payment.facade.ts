import {Injectable} from "@angular/core";
import {PaymentService} from "../../api/payment.service";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {transactionDetails} from "../../config/key";
import {Navigate} from "@ngxs/router-plugin";
import {PaymentCallbackDTO} from "../../model/DTO/payment-callback.DTO";
import {StorageService} from "../../service/storage.service";
import {RegisterFacade} from "../register-store/register.facade";


@Injectable({
  providedIn: 'root'
})
export class PaymentFacade {

  constructor(
    private paymentService: PaymentService,
    private storageService: StorageService,
    private registerFacade: RegisterFacade,
  ) {
  }

  async getPaymentToken() {
    const data = await this.paymentService.getToken()
    const form = document.createElement('form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', data.ipgUrl)
    form.setAttribute('target', '_self')
    // form.action = "https://sep.shaparak.ir/OnlinePG/OnlinePG"
    const tokenInput = document.createElement("input");
    tokenInput.setAttribute('name', 'Token')
    tokenInput.setAttribute('type', 'hidden')
    tokenInput.setAttribute('value', data.inputData.token)
    const getMethodInput = document.createElement("input");
    getMethodInput.setAttribute('name', 'GetMethod')
    getMethodInput.setAttribute('type', 'text')
    getMethodInput.setAttribute('value', 'true')
    form.appendChild(tokenInput)
    form.appendChild(getMethodInput)
    form.style.display = 'none';
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    // window.open(`https://peppy-paprenjak-22f57b.netlify.app/?resNum=${data.inputData.resNum}`, '_parent')
  }

  @Dispatch()
  async paymentCallBack(payload: PaymentCallbackDTO) {
    const data = await this.paymentService.paymentCallBack(payload)
    await this.registerFacade.inquiryRegister()
    this.storageService.setSessionStorage(transactionDetails, data)
    return new Navigate(['/payment-status'])
  }

}
