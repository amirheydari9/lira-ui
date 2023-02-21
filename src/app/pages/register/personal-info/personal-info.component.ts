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

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.PersonalInfoForm = this.fb.group({
      englishFirstName: this.fb.control(null, [Validators.required]),
      englishLastName: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
    })
    if (this.storageService.getSessionStorage(preRegisterUserData)) {
      this.PersonalInfoForm.patchValue(this.storageService.getSessionStorage(preRegisterUserData))
    }
  }

  handleConfirm() {
    console.log(this.PersonalInfoForm.getRawValue())
    this.storageService.setSessionStorage(preRegisterUserData, {
      ...this.storageService.getSessionStorage(preRegisterUserData),
      ...this.PersonalInfoForm.getRawValue()
    })
    this.router.navigate(['/register/passport-info'])
  }
}
