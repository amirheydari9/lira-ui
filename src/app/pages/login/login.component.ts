import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomValidators} from "../../utils/Custom-Validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup

  constructor(
    public router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      nationalCode: this.fb.control(null, [Validators.required, CustomValidators.nationalCode]),
      mobileNumber: this.fb.control(null, [Validators.required, CustomValidators.mobile]),
    })
  }

  handleConfirm() {

  }

}
