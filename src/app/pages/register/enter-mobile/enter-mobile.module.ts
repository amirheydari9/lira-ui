import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnterMobileComponent} from './enter-mobile.component';
import {InputTextModule} from "../../../ui-kit/text-input/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    EnterMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EnterMobileComponent
    }]),
    InputTextModule,
    ReactiveFormsModule,
    ActionBarModule,
    TranslateModule
  ]
})
export class EnterMobileModule {
}
