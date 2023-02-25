import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestinationAddressComponent} from './destination-address.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TextareaModule} from "../../../ui-kit/textarea/textarea.component";
import {
  RegisterSuccessDialogModule
} from "../../../componnet/dialog/register-success-dialog/register-success-dialog.component";
import {TimePickerModule} from "../../../ui-kit/time-picker/time-picker.component";
import {DatePickerModule} from "../../../ui-kit/date-picker/date-picker.component";


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
        ReactiveFormsModule,
        TranslateModule,
        ActionBarModule,
        TextareaModule,
        RegisterSuccessDialogModule,
        TimePickerModule,
        DatePickerModule,
    ]
})
export class DestinationAddressModule {
}
