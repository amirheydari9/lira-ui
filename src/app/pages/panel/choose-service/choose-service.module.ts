import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChooseServiceComponent} from './choose-service.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";


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
    TranslateModule
  ]
})
export class ChooseServiceModule {
}
