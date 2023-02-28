import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadDocumentComponent} from './upload-document.component';
import {RouterModule} from "@angular/router";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {TranslateModule} from "@ngx-translate/core";
import {SvgIconModule} from "../../../componnet/svg-icon/svg-icon.component";


@NgModule({
  declarations: [
    UploadDocumentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: UploadDocumentComponent
    }]),
    ActionBarModule,
    TranslateModule,
    SvgIconModule
  ]
})
export class UploadDocumentModule {
}
