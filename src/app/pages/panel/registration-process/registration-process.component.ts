import {Component, NgModule, OnInit} from '@angular/core';
import {RegisterStepperModule} from "../../../componnet/register-stepper/register-stepper.component";
import {TranslateModule} from "@ngx-translate/core";
import {ActionBarModule} from "../../../componnet/action-bar/action-bar.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-registration-process',
  templateUrl: './registration-process.component.html',
  styleUrls: ['./registration-process.component.scss']
})
export class RegistrationProcessComponent implements OnInit {

  requirements = [
    {title: 'REGISTER.REQUIREMENT_1', subTitle: 'REGISTER.REQUIREMENT_1_SUB', icon: '', iconBg: ''},
    {title: 'REGISTER.REQUIREMENT_2', subTitle: 'REGISTER.REQUIREMENT_2_SUB', icon: '', iconBg: ''},
    {title: 'REGISTER.REQUIREMENT_3', subTitle: 'REGISTER.REQUIREMENT_3_SUB', icon: '', iconBg: ''},
    {title: 'REGISTER.REQUIREMENT_4', subTitle: 'REGISTER.REQUIREMENT_4_SUB', icon: '', iconBg: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

