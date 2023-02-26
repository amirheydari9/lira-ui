import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GiftCardsComponent} from './gift-cards.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {CardTypeStore} from "../../../data-store/card-type-store/card-type.store";
import {CardModule} from "../../../componnet/card/card.component";
import {LoadingContainerModule} from "../../../componnet/loading-container/loading-container.component";


@NgModule({
  declarations: [
    GiftCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: GiftCardsComponent
    }]),
    TranslateModule,
    CardTypeStore,
    CardModule,
    LoadingContainerModule
  ]
})
export class GiftCardsModule {
}
