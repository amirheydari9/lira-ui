import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAllowedRoutingModule } from './not-allowed-routing.module';
import { NotAllowedComponent } from './not-allowed.component';


@NgModule({
  declarations: [
    NotAllowedComponent
  ],
  imports: [
    CommonModule,
    NotAllowedRoutingModule
  ]
})
export class NotAllowedModule { }
