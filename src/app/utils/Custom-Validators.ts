import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {

  static mobile(control: AbstractControl): ValidationErrors | null {
    const mobileNumber = control.value;
    if (!mobileNumber) {
      return null;
    }
    const mobileRegex = new RegExp(/^09\d{9}$/);
    return mobileRegex.test(mobileNumber) ? null : {
      mobile: {message: 'شماره موبایل معتبر نمی باشد'}
    };
  }

  static nationalCode(control: AbstractControl): ValidationErrors | null {
    const nationalCode = control.value;
    if (!nationalCode) {
      return null;
    }
    if (nationalCode.length !== 10 ||
      nationalCode === '0000000000' ||
      nationalCode === '1111111111' ||
      nationalCode === '2222222222' ||
      nationalCode === '3333333333' ||
      nationalCode === '4444444444' ||
      nationalCode === '5555555555' ||
      nationalCode === '6666666666' ||
      nationalCode === '7777777777' ||
      nationalCode === '8888888888' ||
      nationalCode === '9999999999') {
      return {
        nationalCode: {
          message: 'کد ملی نامعتبر است'
        }
      };
    }

    const c = Number(nationalCode.charAt(9));
    const n = Number(nationalCode.charAt(0)) * 10 +
      Number(nationalCode.charAt(1)) * 9 +
      Number(nationalCode.charAt(2)) * 8 +
      Number(nationalCode.charAt(3)) * 7 +
      Number(nationalCode.charAt(4)) * 6 +
      Number(nationalCode.charAt(5)) * 5 +
      Number(nationalCode.charAt(6)) * 4 +
      Number(nationalCode.charAt(7)) * 3 +
      Number(nationalCode.charAt(8)) * 2;
    const r = n - Math.floor(n / 11) * 11;
    return (r === 0 && r === c) || (r === 1 && c === 1) || (r > 1 && c === 11 - r)
      ? null
      : {
        nationalCode: {
          message: 'کد ملی نامعتبر است'
        }
      };
  }

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
