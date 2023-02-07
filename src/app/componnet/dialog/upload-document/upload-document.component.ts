import {Component, NgModule, OnInit} from '@angular/core';
import {DialogModule} from "../../../ui-kit/dialog/dialog.component";
import {TranslateModule} from "@ngx-translate/core";
import {SvgIconModule} from "../../svg-icon/svg-icon.component";
import {FileService} from "../../../service/file.service";

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  imageSrc = 'assets/images/passport.png'

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
}

@NgModule({
  declarations: [UploadDocumentComponent],
  imports: [
    DialogModule,
    TranslateModule,
    SvgIconModule
  ],
  exports: [UploadDocumentComponent]
})

export class UploadDocumentModule {

}
