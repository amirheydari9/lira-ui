import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "../../ui-kit/button/button.component";

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input() showDivider: boolean
  @Input() disabled: boolean = false
  @Input() position: 'sticky' | 'fixed' | 'absolute' = 'fixed'
  @Input() confirmLabel: string
  @Input() cancelLabel: string = 'انصراف'
  @Input() showCancel: boolean = true
  @Input() fullWidth: boolean = true

  @Output() confirm: EventEmitter<void> = new EventEmitter<void>()
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
  }

  handleConfirm() {
    this.confirm.emit()
  }

  handleCancel() {
    this.cancel.emit()
  }

}

@NgModule({
  declarations: [ActionBarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ActionBarComponent]
})
export class ActionBarModule {

}
