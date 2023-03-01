import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {preRegisterUserData} from "../../../config/key";
import {StorageService} from "../../../service/storage.service";
import {AutoUnsubscribe} from "../../../decorator/AutoUnSubscribe";
import {Subscription} from "rxjs";

@AutoUnsubscribe()
@Component({
  selector: 'app-passport-info',
  templateUrl: './passport-info.component.html',
  styleUrls: ['./passport-info.component.scss']
})
export class PassportInfoComponent implements OnInit {

  PassportInfoForm: FormGroup
  subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
  ) {
  }

  ngOnInit(): void {
    this.PassportInfoForm = this.fb.group({
      passNo: this.fb.control(null, [Validators.required]),
      passCreateDate: this.fb.control(null, [Validators.required]),
      passExpireDate: this.fb.control(null, [Validators.required]),
    })
    if (this.storageService.getSessionStorage(preRegisterUserData)) {
      this.PassportInfoForm.patchValue(this.storageService.getSessionStorage(preRegisterUserData))
    }
    this.subscription = this.PassportInfoForm.valueChanges.subscribe(data => {
      this.storageService.setSessionStorage(preRegisterUserData, {
        ...this.storageService.getSessionStorage(preRegisterUserData),
        ...this.PassportInfoForm.getRawValue()
      })
    })
  }

}
