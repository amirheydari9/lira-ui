import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {DateService} from "../../service/date.service";
import {MatDatepickerInputEvent, MatDatepickerModule} from "@angular/material/datepicker";
import {FieldErrorModule} from "../field-errors/field-errors.component";
import {MaterialJalaliMomentAdapterModule} from "material-jalali-moment-adapter";
import {CommonModule} from "@angular/common";

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
    const value = this.dateService.convertGeorgianToJalali(
      $event.value.toISOString(), 'YYYY-MM-DD', 'iso')
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
    MaterialJalaliMomentAdapterModule,
  ],
  exports: [DatePickerComponent]
})

export class DatePickerModule {

}
