import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    ServerErrorRoutingModule,
    RouterModule
  ]
})
export class ServerErrorModule { }
