import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PanelRoutingModule} from './panel-routing.module';
import {PanelComponent} from './panel.component';
import {MainToolbarModule} from "../../componnet/main-toolbar/main-toolbar.component";


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MainToolbarModule
  ]
})
export class PanelModule {
}
