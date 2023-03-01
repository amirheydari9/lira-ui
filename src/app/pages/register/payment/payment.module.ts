import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from './payment.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {JalaliDatePipeModule} from "../../../pipe/jalali-date.pipe";
import {CurrencyModule} from "../../../directive/currency.directive";


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PaymentComponent
    }]),
    TranslateModule,
    ActionBarModule,
    ReactiveFormsModule,
    CurrencyModule,
    JalaliDatePipeModule,
  ]
})
export class PaymentModule {
}
