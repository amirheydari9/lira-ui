import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmHotelAddressDTO} from "../../../model/DTO/confirm-hotel-address.DTO";
import {RegisterFacade} from "../../../data-store/register-store/register.facade";

@Component({
  selector: 'app-hotel-address',
  templateUrl: './hotel-address.component.html',
  styleUrls: ['./hotel-address.component.scss']
})
export class HotelAddressComponent implements OnInit {

  HotelAddressForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private registerFacade: RegisterFacade
  ) {
  }

  ngOnInit(): void {
    this.HotelAddressForm = this.fb.group({
      hotelAddress: this.fb.control(null, [Validators.required]),
      date: this.fb.control(null, [Validators.required]),
      fromTime: this.fb.control(null, [Validators.required]),
      toTime: this.fb.control(null, [Validators.required]),
    })
  }

  async handleConfirm() {
    const payload = new ConfirmHotelAddressDTO(
      this.HotelAddressForm.controls['hotelAddress'].value,
      `${this.HotelAddressForm.controls['date'].value}T${this.HotelAddressForm.controls['fromTime'].value}:00`,
      `${this.HotelAddressForm.controls['date'].value}T${this.HotelAddressForm.controls['toTime'].value}:00`,
    )
    await this.registerFacade.confirmHotelAddress(payload)
  }

}
