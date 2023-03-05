import {Injectable, NgModule} from '@angular/core';
import {NgxsModule, State} from '@ngxs/store';

export interface IpgStateModel {

}

@State<IpgStateModel>({
  name: 'ipg',
})

@Injectable()
export class ipgState {

}

@NgModule({
  imports: [NgxsModule.forFeature([ipgState])]
})
export class IpgStore {
}
