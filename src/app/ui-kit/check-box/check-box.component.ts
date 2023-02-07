import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent extends BaseControlValueAccessor<boolean> implements OnInit {

  @Input() id: string
  control: FormControl;

  constructor(
    @Self() private controlDirective: NgControl,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl
  }

  onChanged($event: Event) {
    this.changed($event.target['checked']);
  }
}

@NgModule({
  declarations: [CheckBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [CheckBoxComponent]
})
export class CheckBoxModule {
}
