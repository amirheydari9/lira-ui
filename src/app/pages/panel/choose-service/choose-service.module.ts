import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChooseServiceComponent} from './choose-service.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {CardTypeStore} from "../../../data-store/card-type-store/card-type.store";


@NgModule({
  declarations: [
    ChooseServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChooseServiceComponent
      }
    ]),
    TranslateModule,
    CardTypeStore
  ]
})
export class ChooseServiceModule {
}
