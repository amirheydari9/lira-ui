import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../utils/Custom-Validators";
import {ConfirmAddressDTO} from "../../../model/DTO/confirm-address.DTO";
import {RegisterFacade} from "../../../data-store/register-store/register.facade";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  AddressForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private registerFacade: RegisterFacade
  ) {
  }

  ngOnInit(): void {
    this.AddressForm = this.fb.group({
      deliveryPostalCode: this.fb.control('', [Validators.required, CustomValidators.postalCode]),
      deliveryAddress: this.fb.control('', [Validators.required]),
    })
  }

  async handleConfirm() {
    const payload = new ConfirmAddressDTO(
      this.AddressForm.controls['deliveryPostalCode'].value, this.AddressForm.controls['deliveryAddress'].value
    )
    await this.registerFacade.confirmAddress(payload)
  }
}
