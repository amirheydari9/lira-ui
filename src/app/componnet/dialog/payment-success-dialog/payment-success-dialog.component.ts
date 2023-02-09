import {Component, NgModule, OnInit} from '@angular/core';
import {DialogModule} from "../../../ui-kit/dialog/dialog.component";
import {TranslateModule} from "@ngx-translate/core";
import {ActionSuccessModule} from "../../action-success/action-success.component";
import {SvgIconModule} from "../../svg-icon/svg-icon.component";
import {Router, RouterModule} from "@angular/router";
import {RegisterStepperModule} from "../../register-stepper/register-stepper.component";

@Component({
  selector: 'app-payment-success-dialog',
  templateUrl: './payment-success-dialog.component.html',
  styleUrls: ['./payment-success-dialog.component.scss']
})
export class PaymentSuccessDialogComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [PaymentSuccessDialogComponent],
  imports: [
    DialogModule,
    TranslateModule,
    ActionSuccessModule,
    SvgIconModule,
    RouterModule,
    RegisterStepperModule
  ],
  exports: [PaymentSuccessDialogComponent]
})
export class PaymentSuccessDialogModule {

}
