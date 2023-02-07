import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import 'svg-icon-sprite';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg-icon
      [attr.src]="'assets/sprites/sprite.svg#'+svg"
      [attr.width]="width"
      [attr.height]="height"
      [attr.viewBox]="viewBox"
      [attr.classes]="classes"
    ></svg-icon>
  `
})
export class SvgIconComponent {
  @Input() svg: string
  @Input() width: string = '24'
  @Input() height: string = '24'
  @Input() viewBox: string
  @Input() classes: string

  constructor() {

  }
}

@NgModule({
  declarations: [SvgIconComponent],
  imports: [
    CommonModule,
  ],
  exports: [SvgIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SvgIconModule {

}
