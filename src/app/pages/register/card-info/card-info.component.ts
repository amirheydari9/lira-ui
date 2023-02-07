import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  CardInfoForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.CardInfoForm = this.fb.group({
      cardNumber: this.fb.control('', [Validators.required]),
      cvv2: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.minLength(4)]),
      expYear: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      expMonth: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.min(1), Validators.max(12)]),
    })
  }

}
