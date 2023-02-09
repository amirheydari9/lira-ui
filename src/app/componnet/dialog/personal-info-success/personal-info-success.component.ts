import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DialogModule} from "../../../ui-kit/dialog/dialog.component";
import {TranslateModule} from "@ngx-translate/core";
import {ActionSuccessModule} from "../../action-success/action-success.component";
import {RegisterStepperModule} from "../../register-stepper/register-stepper.component";
import {SvgIconModule} from "../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-personal-info-success',
  templateUrl: './personal-info-success.component.html',
  styleUrls: ['./personal-info-success.component.scss']
})
export class PersonalInfoSuccessComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [PersonalInfoSuccessComponent],
  imports: [
    DialogModule,
    TranslateModule,
    ActionSuccessModule,
    RegisterStepperModule,
    SvgIconModule
  ],
  exports: [PersonalInfoSuccessComponent]
})
export class PersonalInfoSuccessModule {

}
