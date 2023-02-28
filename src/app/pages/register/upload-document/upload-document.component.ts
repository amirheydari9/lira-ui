import {Component, OnInit} from '@angular/core';
import {FileService} from "../../../service/file.service";

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  defaultSrc = 'assets/images/passport.png'
  imageSrc = ''


  constructor(
    private fileService: FileService
  ) {
  }

  ngOnInit(): void {
  }

  async handleChangeFile($event: Event) {
    const file = $event.target['files'][0]
    this.imageSrc = await this.fileService.convertFileToBase64(file)
  }

  handleConfirm() {

  }
}
