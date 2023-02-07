import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from "./error.component";

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: 'server-error',
        loadChildren: () => import('./server-error/server-error.module')
          .then(m => m.ServerErrorModule)
      },
      {
        path: 'not-allowed',
        loadChildren: () => import('./not-allowed/not-allowed.module')
          .then(m => m.NotAllowedModule)
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module')
          .then(m => m.NotFoundModule)
      },
      {
        path: '**',
        redirectTo: '/error/not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
}
