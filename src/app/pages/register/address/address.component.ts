import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../utils/Custom-Validators";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  AddressForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.AddressForm = this.fb.group({
      postalCode: this.fb.control('', [Validators.required, CustomValidators.postalCode]),
      address: this.fb.control('', [Validators.required]),
    })
  }

}
