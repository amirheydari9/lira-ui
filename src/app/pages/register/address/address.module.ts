import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressComponent} from './address.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {InputTextModule} from "../../../ui-kit/text-input/text-input.component";
import {TranslateModule} from "@ngx-translate/core";
import {TextareaModule} from "../../../ui-kit/textarea/textarea.component";


@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AddressComponent
    }]),
    ReactiveFormsModule,
    ActionBarModule,
    InputTextModule,
    TranslateModule,
    TextareaModule,
  ]
})
export class AddressModule {
}
