import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomPreloadStrategyService} from "./service/custom-preload-strategy.service";
import {NotRegisteredGuard} from "./guard/not-registered.guard";
import {StatusGuard} from "./guard/status.guard";
import {PaymentSuccessGuard} from "./guard/payment-success.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/panel/panel.module').then(m => m.PanelModule),
    canActivate: [NotRegisteredGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./pages/status/status.module').then(m => m.StatusModule),
    canActivate: [StatusGuard]
  },
  {
    path: 'payment-success',
    loadChildren: () => import('./pages/payment-success/payment-success.module').then(m => m.PaymentSuccessModule),
    canActivate: [PaymentSuccessGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then((m) => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: '/error/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategyService,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
