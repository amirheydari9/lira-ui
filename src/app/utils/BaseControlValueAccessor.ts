import {ControlValueAccessor} from '@angular/forms';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {

  public value: T;
  public disabled = false;

  public changed: (value: T) => void;
  public touched: () => void;
  public isDisabled: boolean;

  public writeValue(value: T): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
