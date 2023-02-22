import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {
  NgxMaterialTimepickerTheme
} from "ngx-material-timepicker/src/app/material-timepicker/models/ngx-material-timepicker-theme.interface";
import {CommonModule} from "@angular/common";
import {FieldErrorModule} from "../field-errors/field-errors.component";

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;
  timePickerTheme: NgxMaterialTimepickerTheme = {
    dial: {dialBackgroundColor: '#0091EA'},
    container: {buttonColor: '#0091EA'},
    clockFace: {clockHandColor: '#0091EA'},
  }

  @Input() label: string

  constructor(
    @Self() private controlDirective: NgControl,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl
  }

  onChanged($event: string) {
    this.changed($event);
    this.writeValue($event);
  }
}

@NgModule({
  declarations: [TimePickerComponent],
  imports: [NgxMaterialTimepickerModule, CommonModule, FieldErrorModule, FormsModule],
  exports: [TimePickerComponent]
})
export class TimePickerModule {

}
