import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {
  PaymentSuccessDialogComponent
} from "../../../componnet/dialog/payment-success-dialog/payment-success-dialog.component";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  PaymentForm: FormGroup

  methodsList = [
    'PAYMENT.TEXT_6',
    'PAYMENT.TEXT_7',
  ];

  constructor(
    private fb: FormBuilder,
    private bt: MatBottomSheet
  ) {
  }

  ngOnInit(): void {
    this.PaymentForm = this.fb.group({
      paymentMethods: [2]
    });
  }

  get paymentMethodsCtrl(): FormControl {
    return this.PaymentForm.controls['paymentMethods'] as FormControl
  }


  handleConfirm() {
    this.bt.open(PaymentSuccessDialogComponent)
  }
}
