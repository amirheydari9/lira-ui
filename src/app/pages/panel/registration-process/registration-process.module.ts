import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationProcessComponent} from "./registration-process.component";
import {RegisterStepperModule} from "../../../componnet/register-stepper/register-stepper.component";
import {TranslateModule} from "@ngx-translate/core";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    RegistrationProcessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistrationProcessComponent
      }
    ]),
    ActionBarModule,
    TranslateModule,
    RegisterStepperModule
  ]
})
export class RegistrationProcessModule {
}
