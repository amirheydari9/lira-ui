import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {DateService} from "../../service/date.service";
import {MatDatepickerInputEvent, MatDatepickerModule} from "@angular/material/datepicker";
import {FieldErrorModule} from "../field-errors/field-errors.component";
import {CommonModule} from "@angular/common";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  NativeDateAdapter
} from "@angular/material/core";


const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

class AppDateAdapter extends NativeDateAdapter {
  public constructor(matDateLocale: string) {
    super(matDateLocale);
  }

  public override format(date: Date, displayFormat: string): string {
    // if (displayFormat === 'YYYY-MM-DD') {
    //   return date.toLocaleDateString('en-GB', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //   });
    // } else {
    //   return date.getFullYear().toString();
    // }
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }
}


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;
  startDate: Date

  @Input() label: string
  @Input() errors: any = null
  @Input() startView: 'month' | 'year' | 'multi-year' = 'month'

  constructor(
    @Self() private controlDirective: NgControl,
    private dateService: DateService
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl
  }

  onChanged($event: MatDatepickerInputEvent<any | null>) {
    const value =  $event.value.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    // const value = this.dateService.convertGeorgianToJalali(
    //   $event.value.toISOString(), 'YYYY-MM-DD', 'iso')
    this.changed(value);
  }
}


@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    FieldErrorModule,
    // MaterialJalaliMomentAdapterModule,
    MatNativeDateModule
  ],
  exports: [DatePickerComponent],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
  ]
})

export class DatePickerModule {

}
