import {Component, OnInit} from '@angular/core';
import {CardTypeFacade} from "../../../data-store/card-type-store/card-type.facade";

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.scss']
})
export class ChooseServiceComponent implements OnInit {

  constructor(
    public cardTypeFacade: CardTypeFacade
  ) {
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.cardTypeFacade.fetchCardTypeList()
    } catch (e) {
      console.log(e)
    }
  }

}
