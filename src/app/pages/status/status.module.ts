import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusComponent} from "./status.component";
import {RouterModule} from "@angular/router";
import {ActionSuccessModule} from "../../componnet/action-success/action-success.component";
import {TranslateModule} from "@ngx-translate/core";
import {RegisterStepperModule} from "../../componnet/register-stepper/register-stepper.component";
import {SvgIconModule} from "../../componnet/svg-icon/svg-icon.component";
import {ActionBarModule} from "../../componnet/action-bar/action-bar.component";
import {SupportModule} from "../../componnet/support/support.component";


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: StatusComponent
    }]),
    ActionSuccessModule,
    TranslateModule,
    RegisterStepperModule,
    SvgIconModule,
    ActionBarModule,
    SupportModule
  ]
})
export class StatusModule {
}
