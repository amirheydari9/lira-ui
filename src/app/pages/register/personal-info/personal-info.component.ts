import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../../service/storage.service";
import {Router} from "@angular/router";
import {preRegisterUserData} from "../../../config/key";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  PersonalInfoForm: FormGroup
  options = [
    {name: '1000', value: 1000},
    {name: '1000', value: 1000},
    {name: '1000', value: 1000},
    {name: '1000', value: 1000},
  ]

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.PersonalInfoForm = this.fb.group({
      englishFirstName: this.fb.control(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      englishLastName: this.fb.control(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      amount: this.fb.control(null),
    })
    if (this.storageService.getSessionStorage(preRegisterUserData)) {
      this.PersonalInfoForm.patchValue(this.storageService.getSessionStorage(preRegisterUserData))
    }
  }

  handleConfirm() {
    this.storageService.setSessionStorage(preRegisterUserData, {
      ...this.storageService.getSessionStorage(preRegisterUserData),
      ...this.PersonalInfoForm.getRawValue()
    })
    this.router.navigate(['/register/passport-info'])
  }
}
