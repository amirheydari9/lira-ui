import {Component, NgModule, OnInit} from '@angular/core';
import {SvgIconModule} from "../svg-icon/svg-icon.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-support',
  template: `
    <a href="tel://02191060000">
      <div class="d-flex align-items-center">
        <app-svg-icon svg="support" width="16" height="16" classes="ms-1"></app-svg-icon>
        <span class="text-success-lira font-sm-bold" [translate]="'COMPONENTS.SUPPORT.TEXT'|translate"></span>
      </div>
    </a>`,
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [SupportComponent],
  imports: [
    SvgIconModule,
    TranslateModule
  ],
  exports: [SupportComponent]
})
export class SupportModule {

}
