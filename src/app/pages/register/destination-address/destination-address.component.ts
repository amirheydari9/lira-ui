import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {
  RegisterSuccessDialogComponent
} from "../../../componnet/dialog/register-success-dialog/register-success-dialog.component";

@Component({
  selector: 'app-destination-address',
  templateUrl: './destination-address.component.html',
  styleUrls: ['./destination-address.component.scss']
})
export class DestinationAddressComponent implements OnInit {

  DestinationAddress: FormGroup

  constructor(
    private fb: FormBuilder,
    private bt: MatBottomSheet
  ) {
  }

  ngOnInit(): void {
    this.DestinationAddress = this.fb.group({
      destinationAddress: this.fb.control('', [Validators.required]),
      time: this.fb.control('', [Validators.required]),
    })
  }

  handleConfirm() {
    this.bt.open(RegisterSuccessDialogComponent)
  }
}
