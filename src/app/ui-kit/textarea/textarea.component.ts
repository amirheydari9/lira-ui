import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FieldErrorModule} from "../field-errors/field-errors.component";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;

  @Input() placeholder: string

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
  declarations: [TextareaComponent],
  imports: [CommonModule, FieldErrorModule],
  exports: [TextareaComponent]
})
export class TextareaModule {

}
