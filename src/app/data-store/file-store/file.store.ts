import {Injectable, NgModule} from '@angular/core';
import {Action, NgxsModule, Selector, State, StateContext} from '@ngxs/store';
import {IUploadFileRes} from "../../model/interface/upload-file-res.interface";

export interface FileStateModel {
  file: IUploadFileRes
}

export class UploadFileAction {
  static readonly type = '[File] upload file';

  constructor(
    public payload: IUploadFileRes
  ) {
  }
}

@State<FileStateModel>({
  name: 'file',
})

@Injectable()
export class FileState {

  @Selector()
  public static file(state: FileStateModel): IUploadFileRes {
    return state.file
  }

  @Action(UploadFileAction)
  uploadFile(ctx: StateContext<FileStateModel>, action: UploadFileAction) {
    ctx.setState({...ctx.getState(), file: action.payload})
  }

}

@NgModule({
  imports: [NgxsModule.forFeature([FileState])]
})
export class FileStore {
}
