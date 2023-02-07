import {Component, Input, NgModule, OnInit} from '@angular/core';
import {SvgIconModule} from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-action-success',
  template: `
    <div class="d-flex flex-column align-items-center justify-content-center">
      <app-svg-icon svg="success" width="56" height="56" class="mb-4"></app-svg-icon>
      <span class="text-natural-800 font-sm-medium">{{title}}</span>
    </div>
  `,
  styleUrls: ['./action-success.component.scss']
})
export class ActionSuccessComponent {

  @Input() title: string

}

@NgModule({
  declarations: [ActionSuccessComponent],
  imports: [
    SvgIconModule
  ],
  exports: [ActionSuccessComponent]
})
export class ActionSuccessModule {

}
