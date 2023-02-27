import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalInfoComponent} from './personal-info.component';
import {RouterModule} from '@angular/router';
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "../../../ui-kit/text-input/text-input.component";
import {SelectModule} from "../../../ui-kit/select/select.module";


@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PersonalInfoComponent,
    }]),
    ActionBarModule,
    TranslateModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
  ]
})
export class PersonalInfoModule {
}
