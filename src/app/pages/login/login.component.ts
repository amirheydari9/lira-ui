import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomValidators} from "../../utils/Custom-Validators";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {RegisteredDialogComponent} from "../../componnet/dialog/registered-dialog/registered.component";
import {NoFaradAccountDialogComponent} from "../../componnet/dialog/no-farad-account-dialog/no-farad-account.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private bt: MatBottomSheet
  ) {
  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      nationalCode: this.fb.control(null, [Validators.required, CustomValidators.nationalCode]),
      mobileNumber: this.fb.control(null, [Validators.required, CustomValidators.mobile]),
    })
    // this.bt.open(RegisteredDialogComponent)
    // this.bt.open(NoFaradAccountDialogComponent)

  }

  handleConfirm() {

    this.bt.open(RegisteredDialogComponent)

  }

}
