import {Injectable} from "@angular/core";
import {FileService} from "../../api/file.service";
import {UploadFileDTO} from "../../model/DTO/upload-file.DTO";


@Injectable({
  providedIn: 'root'
})
export class FileFacade {

  constructor(
    private fileService: FileService,
  ) {
  }

  async upload(payload: UploadFileDTO) {
    await this.fileService.upload(payload)
  }

}
