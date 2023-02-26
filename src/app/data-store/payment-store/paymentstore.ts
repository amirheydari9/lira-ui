import {Injectable, NgModule} from '@angular/core';
import {NgxsModule, State} from '@ngxs/store';

export interface paymentStateModel {

}

@State<paymentStateModel>({
  name: 'payment',
})

@Injectable()
export class paymentState {

}

@NgModule({
  imports: [NgxsModule.forFeature([paymentState])]
})
export class PaymentStore {
}
