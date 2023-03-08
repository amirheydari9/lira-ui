import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentStatusComponent} from './payment-status.component';
import {SvgIconModule} from "../../componnet/svg-icon/svg-icon.component";
import {JalaliDatePipeModule} from "../../pipe/jalali-date.pipe";
import {CurrencyModule} from "../../directive/currency.directive";
import {ActionBarModule} from "../../componnet/action-bar/action-bar.component";
import {RouterModule} from "@angular/router";
import {PaymentStatusPipeModule} from "../../pipe/payment-status.pipe";
import {ActionSuccessModule} from "../../componnet/action-success/action-success.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PaymentStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: PaymentStatusComponent
    }]),
    SvgIconModule,
    JalaliDatePipeModule,
    CurrencyModule,
    ActionBarModule,
    PaymentStatusPipeModule,
    ActionSuccessModule,
    TranslateModule
  ]
})
export class PaymentStatusModule {
}
