import {Component, OnInit} from '@angular/core';
import {CardTypeFacade} from "../../../data-store/card-type-store/card-type.facade";

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.scss']
})
export class GiftCardsComponent implements OnInit {

  loading: boolean

  constructor(
    public cardTypeFacade: CardTypeFacade
  ) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loading = true
      await this.cardTypeFacade.fetchCardTypeList()
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

}
