import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassportInfoComponent} from './passport-info.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "../../../ui-kit/text-input/text-input.component";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {DatePickerModule} from "../../../ui-kit/date-picker/date-picker.component";
import {UploadDocumentModule} from "../../../componnet/dialog/upload-document/upload-document.component";


@NgModule({
  declarations: [
    PassportInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PassportInfoComponent
    }]),
    ReactiveFormsModule,
    InputTextModule,
    ActionBarModule,
    TranslateModule,
    DatePickerModule,
    UploadDocumentModule
  ]
})
export class PassportInfoModule {
}
