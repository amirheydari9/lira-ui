import {Component, NgModule, OnInit} from '@angular/core';
import {DialogModule} from "../../../ui-kit/dialog/dialog.component";
import {SvgIconModule} from "../../svg-icon/svg-icon.component";
import {ActionSuccessModule} from "../../action-success/action-success.component";
import {TranslateModule} from "@ngx-translate/core";
import {RegisterStepperModule} from "../../register-stepper/register-stepper.component";

@Component({
  selector: 'app-register-success-dialog',
  templateUrl: './register-success-dialog.component.html',
  styleUrls: ['./register-success-dialog.component.scss']
})
export class RegisterSuccessDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [RegisterSuccessDialogComponent],
  imports: [
    DialogModule,
    SvgIconModule,
    ActionSuccessModule,
    TranslateModule,
    RegisterStepperModule
  ],
  exports: [RegisterSuccessDialogComponent]
})

export class RegisterSuccessDialogModule {

}
