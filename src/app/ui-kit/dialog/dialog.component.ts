import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
  MatBottomSheetModule,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import {ActionBarModule} from "../../componnet/action-bar/action-bar.component";
import {SvgIconModule} from "../../componnet/svg-icon/svg-icon.component";
import {Subscription} from "rxjs";
import {AutoUnsubscribe} from "../../decorator/AutoUnSubscribe";
import {NavigationEnd, Router} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";

@AutoUnsubscribe()
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() hasPadding: boolean = true
  @Input() bgColor: string
  @Input() title: string
  @Input() disabled: boolean;
  @Input() confirmLabel: string = 'تایید'
  @Input() cancelLabel: string = 'انصراف'
  @Input() showActionBar: boolean
  @Input() showCancelBtn: boolean
  @Input() fullWidth: boolean = true
  @Input() closeable: boolean = false
  @Input() contentClass: string

  subscription: Subscription

  @Output() confirm: EventEmitter<void> = new EventEmitter<void>()
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<DialogComponent>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleCloseDialog()
      }
    })
  }

  handleCloseDialog(data?: any) {
    this._bottomSheetRef.dismiss(data)
  }

}

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatBottomSheetModule, ActionBarModule, SvgIconModule, MatToolbarModule],
  exports: [DialogComponent],
  providers: [
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {
        panelClass: 'custom_bottom_sheet',
        disableClose: true,
        hasBackdrop: true,
        autoFocus: false
      }
    }
  ]
})
export class DialogModule {

}
