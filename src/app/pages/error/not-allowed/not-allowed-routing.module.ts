import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotAllowedComponent} from "./not-allowed.component";

const routes: Routes = [
  {
    path: '',
    component: NotAllowedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAllowedRoutingModule {
}
