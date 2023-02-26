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
    window.open('ipg', '_parent')
  }

}
