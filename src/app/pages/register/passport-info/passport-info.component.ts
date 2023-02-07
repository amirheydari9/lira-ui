import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {UploadDocumentComponent} from "../../../componnet/dialog/upload-document/upload-document.component";

@Component({
  selector: 'app-passport-info',
  templateUrl: './passport-info.component.html',
  styleUrls: ['./passport-info.component.scss']
})
export class PassportInfoComponent implements OnInit {

  PassportInfoForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private bt: MatBottomSheet
  ) {
  }

  ngOnInit(): void {
    this.PassportInfoForm = this.fb.group({
      passportNumber: this.fb.control('', [Validators.required]),
      date: this.fb.control('', [Validators.required]),
      expDate: this.fb.control('', [Validators.required]),
    })
  }

  handleConfirm() {
    this.bt.open(UploadDocumentComponent)
  }
}
