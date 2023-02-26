import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelComponent} from "./panel.component";

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '',
        loadChildren: () => import('../panel/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'gift-cards',
        loadChildren: () => import('../panel/gift-cards/gift-cards.module').then(m => m.GiftCardsModule),
      },
      {
        path: 'gift-card/:id',
        loadChildren: () => import('./gift-card/gift-card.module').then(m => m.GiftCardModule),
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () => import('../panel/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule),
      },
      {
        path: 'registration-process',
        loadChildren: () => import('../panel/registration-process/registration-process.module').then(m => m.RegistrationProcessModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
