import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TermsAndConditionsComponent} from './terms-and-conditions.component';
import {RouterModule} from "@angular/router";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TermsAndConditionsComponent}
    ]),
    ActionBarModule,
    TranslateModule,
  ]
})
export class TermsAndConditionsModule {
}
