import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from './payment.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {
  PaymentSuccessDialogModule
} from "../../../componnet/dialog/payment-success-dialog/payment-success-dialog.component";


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
    PaymentSuccessDialogModule,
  ]
})
export class PaymentModule {
}
