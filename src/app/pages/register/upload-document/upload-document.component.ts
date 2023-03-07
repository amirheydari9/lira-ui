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
import {UpdateDTO} from "../../../model/DTO/update.DTO";

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
  changedFile: boolean

  constructor(
    private fileUtilService: FileUtilService,
    private storageService: StorageService,
    private fileFacade: FileFacade,
    private registerFacade: RegisterFacade
  ) {
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.fileFacade.fetchFile()
      if (this.storageService.getSessionStorage(preRegisterUserData).imageBase64) {
        this.imageSrc = this.storageService.getSessionStorage(preRegisterUserData).imageBase64
        this.file = await await this.fileUtilService.convertBase64ToFile(this.imageSrc)[0]
      }
    } catch (e) {
      console.log(e)
    }
  }

  async handleChangeFile($event: Event) {
    this.changedFile = true
    this.file = $event.target['files'][0]
    this.imageSrc = await this.fileUtilService.convertFileToBase64(this.file)
  }

  async handleConfirm() {
    try {
      if (this.changedFile) {
        const compressedFile = await this.fileUtilService.compressImage(this.file)
        const newFile = this.fileUtilService.createFile(compressedFile)
        await this.fileFacade.upload(new UploadFileDTO(newFile[0]))
      }
      const preRegisterData = this.storageService.getSessionStorage(preRegisterUserData)
      if (preRegisterData.id) {
        const payload = new UpdateDTO(
          preRegisterData.id,
          preRegisterData.cardType.id,
          preRegisterData.englishFirstName,
          preRegisterData.englishLastName,
          preRegisterData.email,
          preRegisterData.passNo,
          preRegisterData.passCreateDate,
          preRegisterData.passExpireDate,
          preRegisterData.passImage,
          preRegisterData.estimatedCost,
        )
        await this.registerFacade.update(payload)
      } else {
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
      }
    } catch (e) {
      console.log(e)
    }
  }
}
