import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CustomValidators} from "../../../utils/Custom-Validators";

@Component({
  selector: 'app-enter-mobile',
  templateUrl: './enter-mobile.component.html',
  styleUrls: ['./enter-mobile.component.scss']
})
export class EnterMobileComponent implements OnInit {

  Mobile: FormControl

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.Mobile = this.fb.control('', [Validators.required, CustomValidators.mobile])
  }

}
