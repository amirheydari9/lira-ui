import {Injectable, NgModule} from '@angular/core';
import {Action, NgxsModule, Selector, State, StateContext} from '@ngxs/store';
import {ICardTypeRes} from "../../model/interface/card-type-res.interface";
import {IList} from "../../model/interface/list";

export interface CardTypeStateModel {
  cardTypes: ICardTypeRes[],
  cardType: ICardTypeRes
}

export class FetchCardTypesAction {
  static readonly type = '[CARD_TYPE] fetch card types';

  constructor(
    public payload: IList<ICardTypeRes>
  ) {
  }
}

export class FetchCardTypeAction {
  static readonly type = '[CARD_TYPE] fetch card type';

  constructor(
    public payload: ICardTypeRes
  ) {
  }
}

@State<CardTypeStateModel>({
  name: 'card_type',
  defaults: {
    cardTypes: [],
    cardType: null
  }
})

@Injectable()
export class CardTypeState {

  @Selector()
  public static cardTypes(state: CardTypeStateModel): ICardTypeRes[] {
    return state.cardTypes
  }

  @Selector()
  public static cardType(state: CardTypeStateModel): ICardTypeRes {
    return state.cardType
  }

  @Action(FetchCardTypesAction)
  fetchCardTypes(ctx: StateContext<CardTypeStateModel>, action: FetchCardTypesAction) {
    ctx.setState({...ctx.getState(), cardTypes: action.payload.content})
  }

  @Action(FetchCardTypeAction)
  fetchCardType(ctx: StateContext<CardTypeStateModel>, action: FetchCardTypeAction) {
    ctx.setState({...ctx.getState(), cardType: action.payload})
  }
}

@NgModule({
  imports: [NgxsModule.forFeature([CardTypeState])]
})
export class CardTypeStore {
}
