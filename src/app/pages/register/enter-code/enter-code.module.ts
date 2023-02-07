import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnterCodeComponent} from './enter-code.component';
import {RouterModule} from '@angular/router';
import {OtpModule} from "../../../componnet/otp/otp.component";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    EnterCodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EnterCodeComponent
    }]),
    OtpModule,
    ActionBarModule,
    TranslateModule,
  ]
})
export class EnterCodeModule {
}
