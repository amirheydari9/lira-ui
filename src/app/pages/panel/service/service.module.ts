import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from './service.component';
import {RouterModule} from "@angular/router";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServiceComponent
      }
    ]),
    ActionBarModule,
    TranslateModule
  ]
})
export class ServiceModule {
}
