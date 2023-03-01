import {Component, OnInit} from '@angular/core';
import {FileUtilService} from "../../../service/file-util.service";
import {preRegisterUserData} from "../../../config/key";
import {StorageService} from "../../../service/storage.service";
import {FileService} from "../../../api/file.service";
import {UploadFileDTO} from "../../../model/DTO/upload-file.DTO";

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  defaultSrc = 'assets/images/passport.png'
  imageSrc = ''
  file: File


  constructor(
    private fileUtilService: FileUtilService,
    private storageService: StorageService,
    private fileService: FileService
  ) {
  }

  ngOnInit(): void {
  }

  async handleChangeFile($event: Event) {
    this.file = $event.target['files'][0]
    this.imageSrc = await this.fileUtilService.convertFileToBase64(this.file)
  }

  async handleConfirm() {
    console.log(this.storageService.getSessionStorage(preRegisterUserData))
    // const compressedFile = await this.fileUtilService.compressImage(this.file)
    // const newFile = this.fileUtilService.createFile(compressedFile)
    // await this.fileService.upload(new UploadFileDTO(newFile[0]))
    await this.fileService.upload(new UploadFileDTO(this.file))

  }
}
