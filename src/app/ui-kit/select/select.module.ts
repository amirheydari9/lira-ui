import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {SelectComponent} from "./select.component";
import {SelectOptionsComponent} from './select-options/select-options.component';
import {DialogModule} from "../dialog/dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldErrorModule} from "../field-errors/field-errors.component";
import {SvgIconModule} from "../../componnet/svg-icon/svg-icon.component";


@NgModule({
  declarations: [SelectComponent, SelectOptionsComponent],
  imports: [TranslateModule, CommonModule, DialogModule, SvgIconModule, ReactiveFormsModule, FormsModule, FieldErrorModule],
  exports: [SelectComponent]
})
export class SelectModule {
}
