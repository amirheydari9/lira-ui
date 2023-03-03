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
    {name: '10 میلیون تومان', value: 1000},
    {name: '20 میلیون تومان', value: 2000},
    {name: '30 میلیون تومان', value: 3000},
    {name: '40 میلیون تومان', value: 4000},
    {name: '50 میلیون تومان', value: 500},
    {name: '60 میلیون تومان', value: 600},
    {name: '70 میلیون تومان', value: 700},
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
      estimatedCost: this.fb.control(null),
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
