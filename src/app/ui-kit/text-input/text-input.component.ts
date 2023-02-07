import {Component, ElementRef, Input, NgModule, OnInit, Self, ViewChild} from '@angular/core';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ConvertNumberToEnglishDirectiveModule} from "../../directive/convert-number-to-english.directive";
import {FieldErrorModule} from "../field-errors/field-errors.component";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;

  @ViewChild('input') input: ElementRef

  @Input() label: string
  @Input() readonly: boolean
  @Input() type: 'tel' | 'text' | 'password' = 'text'
  @Input() dir: 'ltr' | 'rtl' = 'rtl'
  @Input() align: 'right' | 'left' = 'right'
  @Input() maxLength: number
  @Input() errors: any = null
  @Input() prefix: string
  @Input() inputMode: 'numeric' | 'text' = 'text'

  constructor(
    @Self() private controlDirective: NgControl,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl
  }

  public onChanged(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.changed(value);
  }

}

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, FieldErrorModule, FormsModule, ConvertNumberToEnglishDirectiveModule, FieldErrorModule],
  exports: [TextInputComponent]
})
export class InputTextModule {

}
