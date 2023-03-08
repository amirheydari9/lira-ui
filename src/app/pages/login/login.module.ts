import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {ActionBarModule} from "../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {InputTextModule} from "../../ui-kit/text-input/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RegisteredDialogModule} from "../../componnet/dialog/registered-dialog/registered.component";
import {NoFaradAccountDialogModule} from "../../componnet/dialog/no-farad-account-dialog/no-farad-account.component";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: LoginComponent
    }]),
    ActionBarModule,
    TranslateModule,
    InputTextModule,
    ReactiveFormsModule,
    RegisteredDialogModule,
    NoFaradAccountDialogModule
  ]
})
export class LoginModule {
}
