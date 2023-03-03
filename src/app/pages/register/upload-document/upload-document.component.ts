import {Component, OnInit} from '@angular/core';
import {FileUtilService} from "../../../service/file-util.service";
import {StorageService} from "../../../service/storage.service";
import {UploadFileDTO} from "../../../model/DTO/upload-file.DTO";
import {RegisterFacade} from "../../../data-store/register-store/register.facade";
import {FileFacade} from "../../../data-store/file-store/file.facade";
import {AutoUnsubscribe} from "../../../decorator/AutoUnSubscribe";
import {Subscription} from "rxjs";
import {preRegisterUserData} from "../../../config/key";
import {RegisterDTO} from "../../../model/DTO/register.DTO";

@AutoUnsubscribe()
@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  defaultSrc = 'assets/images/passport.png'
  imageSrc = ''
  file: File
  subscription: Subscription

  constructor(
    private fileUtilService: FileUtilService,
    private storageService: StorageService,
    private fileFacade: FileFacade,
    private registerFacade: RegisterFacade
  ) {
  }

  ngOnInit(): void {
  }

  async handleChangeFile($event: Event) {
    this.file = $event.target['files'][0]
    this.imageSrc = await this.fileUtilService.convertFileToBase64(this.file)
  }

  async handleConfirm() {
    try {
      const compressedFile = await this.fileUtilService.compressImage(this.file)
      const newFile = this.fileUtilService.createFile(compressedFile)
      await this.fileFacade.upload(new UploadFileDTO(newFile[0]))
      const preRegisterData = this.storageService.getSessionStorage(preRegisterUserData)
      const payload = new RegisterDTO(
        preRegisterData.cardTypeId,
        preRegisterData.englishFirstName,
        preRegisterData.englishLastName,
        preRegisterData.email,
        preRegisterData.passNo,
        preRegisterData.passCreateDate,
        preRegisterData.passExpireDate,
        preRegisterData.passImage,
        preRegisterData.estimatedCost,
      )
      await this.registerFacade.register(payload)
      console.log(payload)
    } catch (e) {
      console.log(e)
    }
  }
}
