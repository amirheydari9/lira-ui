import {Injectable, NgModule} from '@angular/core';
import {NgxsModule, State} from '@ngxs/store';

export interface FileStateModel {
}

@State<FileStateModel>({
  name: 'file',
})

@Injectable()
export class FileState {

}

@NgModule({
  imports: [NgxsModule.forFeature([FileState])]
})
export class FileStore {
}
