import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {MatDatepickerInputEvent, MatDatepickerModule} from "@angular/material/datepicker";
import {FieldErrorModule} from "../field-errors/field-errors.component";
import {CommonModule} from "@angular/common";
import {MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import * as _moment from 'moment';

const moment = _moment;


const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMMM YYYY',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;

  @Input() label: string
  @Input() errors: any = null
  @Input() startView: 'month' | 'year' | 'multi-year' = 'month'

  constructor(
    @Self() private controlDirective: NgControl,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl
    if (this.value) {
      this.changed(moment(this.value).format('YYYY-MM-DD'));
    }
  }

  onChanged($event: MatDatepickerInputEvent<any | null>) {
    const date = moment($event.value).format('YYYY-MM-DD')
    this.changed(date);
  }
}


@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    FieldErrorModule,
    MatNativeDateModule,
    MatMomentDateModule,
  ],
  exports: [DatePickerComponent],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})

export class DatePickerModule {

}
