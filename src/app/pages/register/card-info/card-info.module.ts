import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardInfoComponent} from './card-info.component';
import {RouterModule} from "@angular/router";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "../../../ui-kit/text-input/text-input.component";
import {CardNumberModule} from "../../../ui-kit/card-number/card-number.component";

@NgModule({
  declarations: [
    CardInfoComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: CardInfoComponent
        }]),
        ActionBarModule,
        TranslateModule,
        ReactiveFormsModule,
        InputTextModule,
        CardNumberModule,
    ]
})
export class CardInfoModule {
}
