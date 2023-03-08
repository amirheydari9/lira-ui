import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {ActionBarModule} from "../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {InputTextModule} from "../../ui-kit/text-input/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";


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
    ReactiveFormsModule
  ]
})
export class LoginModule {
}
