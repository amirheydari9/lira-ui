import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    ActionBarModule,
    TranslateModule
  ]
})
export class HomeModule {
}
