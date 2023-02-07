import {Component, EventEmitter, Input, NgModule, OnInit, Output, ViewChild} from '@angular/core';

import {CountDownModule} from "../count-down/count-down.component";
import {CommonModule} from "@angular/common";
import {NgOtpInputComponent, NgOtpInputConfig, NgOtpInputModule} from "ng-otp-input";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {CountdownConfig} from "ngx-countdown";
import {TranslateModule} from "@ngx-translate/core";
// import {AuthFacade} from "../../data-store/auth-store/auth.facade";
import {Subscription} from "rxjs";
import {AutoUnsubscribe} from "../../decorator/AutoUnSubscribe";
import {NavigatorService} from "../../service/navigator.service";
// import {OtpType} from "../../config/enums";
// import {GetOtpReqDTO} from "../../models/dtos/get-otp-req.DTO";

@AutoUnsubscribe()
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  @Input() class: string
  @Input() nationalCode: string

  showRetry: boolean = false
  otpControl: FormControl
  otpConfig: NgOtpInputConfig = {
    length: 5,
    allowNumbersOnly: true,
    containerClass: 'text-center',
    inputClass: 'otp-invalid'
  }
  countdownConfig: CountdownConfig = {
    leftTime: environment.otpLeftTime
  }
  subscription: Subscription

  @ViewChild(NgOtpInputComponent, {static: false}) ngOtpInput: NgOtpInputComponent;

  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private fb: FormBuilder,
    // private authFacade: AuthFacade,
    private navigatorService: NavigatorService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.otpControl = this.fb.control('',
      [Validators.required, Validators.minLength(this.otpConfig.length)])
    this.subscription = this.otpControl.valueChanges.subscribe(() => {
      this.isValid.emit(this.otpControl.valid)
      this.otpControl.valid
        ? this.ngOtpInput.config.inputClass = 'otp-valid'
        : this.ngOtpInput.config.inputClass = 'otp-invalid'

    })
    await this.autoFillOtp()
  }

  get code(): string {
    return this.otpControl.value
  }

  handleSetOpt(code) {
    this.ngOtpInput.setValue(code);
  }

  async handleResendOtp() {
    // const payload = new GetOtpReqDTO(this.nationalCode, OtpType.RESEND)
    // await this.authFacade.getOtp(payload)
    this.showRetry = false
    this.handleSetOpt('')
    await this.autoFillOtp()
  }

  async autoFillOtp(): Promise<void> {
    const code = await this.navigatorService.otpRequest()
    if (code) this.handleSetOpt(code)
  }
}

@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountDownModule,
    NgOtpInputModule,
    TranslateModule
  ],
  exports: [OtpComponent]
})
export class OtpModule {

}
