import {Injectable} from "@angular/core";
import {CardTypeService} from "../../api/card-type.service";
import {Select} from "@ngxs/store";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {Observable} from "rxjs";
import {CardTypeState, FetchCardTypeAction, FetchCardTypesAction} from "./card-type.store";
import {ICardTypeRes} from "../../model/interface/card-type-res.interface";
import {FetchCardTypeDTO} from "../../model/DTO/fetch-card-type.DTO";


@Injectable({
  providedIn: 'root'
})
export class CardTypeFacade {

  constructor(
    private cardTypeService: CardTypeService,
  ) {
  }

  @Select(CardTypeState.cardTypes) cardTypes$: Observable<ICardTypeRes[]>
  @Select(CardTypeState.cardType) cardType$: Observable<ICardTypeRes>

  @Dispatch()
  async fetchCardTypeList() {
    const data = await this.cardTypeService.fetchCardTypeList();
    return new FetchCardTypesAction(data)
  }

  @Dispatch()
  async fetchCardType(payload: FetchCardTypeDTO) {
    const data = await this.cardTypeService.fetchCardType(payload);
    return new FetchCardTypeAction(data)
  }

}
