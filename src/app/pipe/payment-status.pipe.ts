import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {PaymentStatus} from "../config/enum";

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    switch (value) {
      case PaymentStatus.DONE:
        return "تکمیل شده"
      case PaymentStatus.FAILED:
        return 'انجام نشد'
      case PaymentStatus.IN_PROGRESS:
        return 'در حال انجام'
    }
    return value;
  }

}

@NgModule({
  declarations: [PaymentStatusPipe],
  exports: [PaymentStatusPipe]
})
export class PaymentStatusPipeModule {

}
