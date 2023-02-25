import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GiftCardComponent} from './gift-card.component';
import {RouterModule} from "@angular/router";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    GiftCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GiftCardComponent
      }
    ]),
    ActionBarModule,
    TranslateModule
  ]
})
export class GiftCardModule {
}
