import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestinationAddressComponent} from './destination-address.component';
import {RouterModule} from '@angular/router';
import {InputTextModule} from "../../../ui-kit/text-input/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TextareaModule} from "../../../ui-kit/textarea/textarea.component";
import {
  RegisterSuccessDialogModule
} from "../../../componnet/dialog/register-success-dialog/register-success-dialog.component";


@NgModule({
  declarations: [
    DestinationAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: DestinationAddressComponent
    }]),
    InputTextModule,
    ReactiveFormsModule,
    TranslateModule,
    ActionBarModule,
    TextareaModule,
    RegisterSuccessDialogModule,
  ]
})
export class DestinationAddressModule {
}
