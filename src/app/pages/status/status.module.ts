import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusComponent} from "./status.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: StatusComponent
    }])
  ]
})
export class StatusModule {
}
