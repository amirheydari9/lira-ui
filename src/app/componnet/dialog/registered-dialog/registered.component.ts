import {Component, NgModule, OnInit} from '@angular/core';
import {DialogModule} from "../../../ui-kit/dialog/dialog.component";
import {SvgIconModule} from "../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-registered-dialog',
  template: `
    <app-dialog
      #dialog
      [showActionBar]="true"
      [showCancelBtn]="false"
      [fullWidth]="true"
      [closeable]="true"
      confirmLabel="ورود به پورتال"
      #bottomSheet
      (confirm)="dialog.handleCloseDialog()"
    >
      <div class="d-flex flex-column align-items-center">
        <app-svg-icon svg="success" width="56" height="56" class="mb-3"></app-svg-icon>
        <div class="p-3 background-natural-100 br-8 font-sm-regular text-natural-800">
          <span class="mb-3 d-block">
            کاربر گرامی در صورت تایید هویت کارت به آدرس شما ارسال می‌شود  و می‌تواند از طریق پورتال کارت خود را مدیریت کنید.
          </span>
          <span>
چنانچه کارت را دریافت کرده اید وارد پورتال شوید.
          </span>
        </div>
      </div>
    </app-dialog>`
})
export class RegisteredDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [RegisteredDialogComponent],
  imports: [DialogModule, SvgIconModule],
  exports: [RegisteredDialogComponent]
})
export class RegisteredDialogModule {

}
