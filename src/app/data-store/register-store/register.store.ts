import {Injectable, NgModule} from '@angular/core';
import {Action, NgxsModule, Selector, State, StateContext} from '@ngxs/store';
import {IInquiryRegisterRes} from "../../model/interface/inquiry-register-res.interface";

export interface RegisterStateModel {
  inquiryRegister: IInquiryRegisterRes
}

export class InquiryRegisterAction {
  static readonly type = '[REGISTER] inquiry register';

  constructor(
    public payload: IInquiryRegisterRes
  ) {
  }
}

@State<RegisterStateModel>({
  name: 'register',
})

@Injectable()
export class RegisterState {

  @Selector()
  public static inquiryRegister(state: RegisterStateModel): IInquiryRegisterRes {
    return state.inquiryRegister
  }

  @Action(InquiryRegisterAction)
  inquiryRegister(ctx: StateContext<RegisterStateModel>, action: InquiryRegisterAction) {
    ctx.setState({...ctx.getState(), inquiryRegister: action.payload})
  }
}

@NgModule({
  imports: [NgxsModule.forFeature([RegisterState])]
})
export class RegisterStore {
}
