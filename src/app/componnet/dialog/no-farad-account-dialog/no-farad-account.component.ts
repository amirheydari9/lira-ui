import {Component, NgModule, OnInit} from '@angular/core';
import {DialogModule} from "../../../ui-kit/dialog/dialog.component";

@Component({
  selector: 'app-no-farad-account-dialog',
  template: `
    <app-dialog
      #dialog
      [showActionBar]="true"
      [showCancelBtn]="false"
      [fullWidth]="true"
      [closeable]="false"
      confirmLabel="متوجه شدم"
      #bottomSheet
      (confirm)="dialog.handleCloseDialog()"
    >
      <p class="font-sm-regular text-natural-800 text-center">کاربر گرامی برای دریافت  لیراکارت ابتدا در فردابانک افتتاح حساب کنید</p>
    </app-dialog>`
})
export class NoFaradAccountDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [NoFaradAccountDialogComponent],
  imports: [DialogModule],
  exports: [NoFaradAccountDialogComponent]
})
export class NoFaradAccountDialogModule {

}
