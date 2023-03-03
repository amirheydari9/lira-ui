import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {

  static postalCode(control: AbstractControl): ValidationErrors | null {
    const postalCode = control.value;
    if (!postalCode) {
      return null;
    }
    const postalCodeRegex = new RegExp(/^\d{10}$/);
    return postalCodeRegex.test(postalCode) ? null : {
      postalCode: {message: 'کد پستی نامعتبر است'}
    };
  }

  static passportNumber(control: AbstractControl): ValidationErrors | null {
    const postalCode = control.value;
    if (!postalCode) {
      return null;
    }
    const postalCodeRegex = new RegExp(/^[a-zA-Z0-9]{9}$/);
    return postalCodeRegex.test(postalCode) ? null : {
      passportNumber: {message: 'شماره پاسپورت نامعتبر است'}
    };
  }

  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {whitespace: {message: 'مقدار ورودی نامعتبر است '}}
  }

}
