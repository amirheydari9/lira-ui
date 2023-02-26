import {Component, Input, NgModule, OnInit} from '@angular/core';
import {SkeletonModule} from "../skeleton/skeleton.component";
import {CommonModule} from "@angular/common";
import {CurrencyModule} from "../../directive/currency.directive";
import {ICardTypeRes} from "../../model/interface/card-type-res.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardType: ICardTypeRes
  cardUImageLoader: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [CardComponent],
  imports: [
    SkeletonModule,
    CommonModule,
    CurrencyModule,
  ],
  exports: [CardComponent]
})
export class CardModule {

}
