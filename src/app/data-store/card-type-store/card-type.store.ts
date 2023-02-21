import {Injectable, NgModule} from '@angular/core';
import {Action, NgxsModule, Selector, State, StateContext} from '@ngxs/store';
import {ICardTypeRes} from "../../model/interface/card-type-res.interface";
import {IList} from "../../model/interface/list";

export interface CardTypeStateModel {
  cardTypes: ICardTypeRes[]
}

export class FetchCardTypesAction {
  static readonly type = '[CARD_TYPE] fetch card types';

  constructor(
    public payload: IList<ICardTypeRes>
  ) {
  }
}

@State<CardTypeStateModel>({
  name: 'card_type',
  defaults: {
    cardTypes: []
  }
})

@Injectable()
export class CardTypeState {

  @Selector()
  public static cardTypes(state: CardTypeStateModel): ICardTypeRes[] {
    return state.cardTypes
  }

  @Action(FetchCardTypesAction)
  fetchCardTypes(ctx: StateContext<CardTypeStateModel>, action: FetchCardTypesAction) {
    ctx.setState({...ctx.getState(), cardTypes: action.payload.content})
  }
}

@NgModule({
  imports: [NgxsModule.forFeature([CardTypeState])]
})
export class CardTypeStore {
}
