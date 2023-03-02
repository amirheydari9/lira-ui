import {Component, Input, OnInit, Self} from '@angular/core';
import {FormControl, NgControl} from "@angular/forms";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {SelectOptionsComponent} from "./select-options/select-options.component";
import {first} from "rxjs";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BaseControlValueAccessor<any> implements OnInit {

  control: FormControl;

  @Input() label: string
  @Input() title: string
  @Input() searchable: boolean
  @Input() searchPlaceholder: string
  @Input() clearable: boolean
  @Input() options = []
  @Input() labelKey: string = 'name'
  @Input() valueKey: string = 'value'

  constructor(
    @Self() private controlDirective: NgControl,
    private bottomSheet: MatBottomSheet
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl
  }

  handleShowItems() {
    const dialog = this.bottomSheet.open(SelectOptionsComponent, {
      data: {
        title: this.title ? this.title : `انتخاب ${this.label}`,
        searchable: this.searchable,
        searchPlaceholder: this.searchPlaceholder ? this.searchPlaceholder : `جستجو ${this.label}`,
        options: this.options,
        valueKey: this.valueKey,
        labelKey: this.labelKey,
      }
    })

    dialog.afterDismissed().pipe(first()).subscribe(data => {
      if (data) {
        this.changed(data[this.valueKey])
        this.writeValue(data[this.labelKey])
      }
    })
  }

  handleClear($event: MouseEvent) {
    $event.stopPropagation()
    this.changed(null)
    this.writeValue(null)
  }
}
