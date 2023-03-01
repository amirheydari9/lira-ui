import {Injectable} from "@angular/core";
import {PaymentService} from "../../api/payment.service";


@Injectable({
  providedIn: 'root'
})
export class PaymentFacade {

  constructor(
    private paymentService: PaymentService,
  ) {
  }

  async getPaymentToken() {
    const data = await this.paymentService.getToken()
    const form = document.createElement('form')
    form.action = data.ipgUrl
    // form.action = "https://sep.shaparak.ir/OnlinePG/OnlinePG"
    form.method = 'post'
    const tokenInput = document.createElement("input");
    tokenInput.name = "Token";
    tokenInput.type = "hidden";
    tokenInput.value = data.inputData.token
    const getMethodInput = document.createElement("input");
    getMethodInput.name = "GetMethod";
    getMethodInput.type = "text";
    getMethodInput.value = "true";
    form.style.display = 'none';
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    // window.open(`http://localhost:4201`, '_parent')
  }

}
