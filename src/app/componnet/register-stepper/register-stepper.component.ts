import {Component, Input, NgModule, OnInit} from '@angular/core';
import {SvgIconModule} from "../svg-icon/svg-icon.component";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-register-stepper',
  templateUrl: './register-stepper.component.html',
  styleUrls: ['./register-stepper.component.scss']
})
export class RegisterStepperComponent implements OnInit {

  @Input() currentStep: number = 1

  steps = [
    {title: 'COMPONENTS.REGISTER_STEPPER.STEP_1', icon: 'reg_step_1', done: 'reg_step_1_done'},
    {title: 'COMPONENTS.REGISTER_STEPPER.STEP_2', icon: 'reg_step_2', done: 'reg_step_2_done'},
    {title: 'COMPONENTS.REGISTER_STEPPER.STEP_3', icon: 'reg_step_3', done: 'reg_step_3_done'},
    {title: 'COMPONENTS.REGISTER_STEPPER.STEP_4', icon: 'reg_step_4', done: 'reg_step_4_done'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [RegisterStepperComponent],
  imports: [
    SvgIconModule,
    CommonModule,
    TranslateModule
  ],
  exports: [RegisterStepperComponent]
})
export class RegisterStepperModule {

}
