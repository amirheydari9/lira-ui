import {Component, Input, NgModule} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SvgIconModule} from "../../componnet/svg-icon/svg-icon.component";

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {

  @Input()
  public formField: FormControl;

  public readonly errorMessages = {
    required: () => 'این فیلد اجباری است',
    email: () => 'ایمیل معتبر نمی باشد',
    minlength: (params) => `حداقل ${params.requiredLength} کارکتر وارد نمایید`,
    maxlength: (params) => `حداکثر ${params.requiredLength} کارکتر وارد نمایید`,
    min: (params) => `مقدار این فیلد نمی تواند کمتر از${params.min} باشد`,
    max: (params) => `مقدار این فیلد نمی تواند بیشتر از${params.max} باشد`,
    pattern: (params) => 'کاراکتر های ورودی معتبر نمی باشد',
    postalCode: (params) => params.message,
    whitespace: (params) => params.message,
    passportNumber: (params) => params.message,
  };

  shouldShowErrors(): boolean {
    return this.formField && this.formField.errors && (this.formField.dirty || this.formField.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.formField.errors)
      .map(field => this.getMessage(field, this.formField.errors[field]));
  }

  getMessage(type: string, params: any): string {
    return this.errorMessages[type](params);
  }

}

@NgModule({
  declarations: [FieldErrorsComponent],
  imports: [CommonModule, SvgIconModule],
  exports: [FieldErrorsComponent]
})
export class FieldErrorModule {
}
