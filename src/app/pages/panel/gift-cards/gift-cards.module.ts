import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GiftCardsComponent} from './gift-cards.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {CardTypeStore} from "../../../data-store/card-type-store/card-type.store";
import {SkeletonModule} from "../../../componnet/skeleton/skeleton.component";
import {CurrencyModule} from "../../../directive/currency.directive";


@NgModule({
  declarations: [
    GiftCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GiftCardsComponent
      }
    ]),
    TranslateModule,
    CardTypeStore,
    SkeletonModule,
    CurrencyModule
  ]
})
export class GiftCardsModule {
}
