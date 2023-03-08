import {Injectable} from "@angular/core";
import {FileService} from "../../api/file.service";
import {UploadFileDTO} from "../../model/DTO/upload-file.DTO";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {FileState, UploadFileAction} from "./file.store";
import {IUploadFileRes} from "../../model/interface/upload-file-res.interface";
import {preRegisterUserData} from "../../config/key";
import {StorageService} from "../../service/storage.service";


@Injectable({
  providedIn: 'root'
})
export class FileFacade {

  constructor(
    private fileService: FileService,
    private storageService: StorageService,
  ) {
  }

  @Select(FileState.file) file$: Observable<IUploadFileRes>

  @Dispatch()
  async upload(payload: UploadFileDTO) {
    const data = await this.fileService.upload(payload)
    this.storageService.setSessionStorage(preRegisterUserData, {
      ...this.storageService.getSessionStorage(preRegisterUserData),
      passImage: data.name
    })
    return new UploadFileAction(data)
  }

  async fetchFile() {
    const data = await this.fileService.fetchFile()
    this.storageService.setSessionStorage(preRegisterUserData, {
      ...this.storageService.getSessionStorage(preRegisterUserData),
      imageBase64: data
    })
  }

}
