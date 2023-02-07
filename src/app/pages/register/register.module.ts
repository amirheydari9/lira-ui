import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {MainToolbarModule} from "../../componnet/main-toolbar/main-toolbar.component";
import {RegisterStepperModule} from "../../componnet/register-stepper/register-stepper.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MainToolbarModule,
    RegisterStepperModule,
    TranslateModule
  ]
})
export class RegisterModule {
}
