import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NgxMaskModule} from "ngx-mask";
import {FieldErrorModule} from "../field-errors/field-errors.component";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {ConvertNumberToEnglishDirectiveModule} from "../../directive/convert-number-to-english.directive";

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss'],
})
export class CardNumberComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;

  @Input() label: string
  @Input() errors: any = null;

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
    const value = (event.target as HTMLInputElement).value
    this.changed(value.split(' - ').join(''));
  }

}

@NgModule({
  declarations: [CardNumberComponent],
  imports: [CommonModule, NgxMaskModule, FieldErrorModule, FormsModule, ConvertNumberToEnglishDirectiveModule],
  exports: [CardNumberComponent]
})
export class CardNumberModule {
}
