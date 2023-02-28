import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelAddressComponent} from './hotel-address.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TextareaModule} from "../../../ui-kit/textarea/textarea.component";
import {DatePickerModule} from "../../../ui-kit/date-picker/date-picker.component";
import {TimePickerModule} from "../../../ui-kit/time-picker/time-picker.component";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HotelAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HotelAddressComponent
    }]),
    ReactiveFormsModule,
    TextareaModule,
    DatePickerModule,
    TimePickerModule,
    ActionBarModule,
    TranslateModule
  ]
})
export class HotelAddressModule {
}
