import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register.component";

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'personal-info'
      },
      {
        path: 'personal-info',
        loadChildren: () => import('../register/personal-info/personal-info.module').then(m => m.PersonalInfoModule),
        data: {currentStep: 1, title: 'PAGE_TITLE.PERSONAL_INFO'}
      },
      {
        path: 'passport-info',
        loadChildren: () => import('../register/passport-info/passport-info.module').then(m => m.PassportInfoModule),
        data: {currentStep: 1, title: 'PAGE_TITLE.PASSPORT_INFO'}
      },
      {
        path: 'address',
        loadChildren: () => import('../register/address/address.module').then(m => m.AddressModule),
        data: {currentStep: 2, title: 'PAGE_TITLE.ADDRESS'}
      },

      {
        path: 'payment',
        loadChildren: () => import('../register/payment/payment.module').then(m => m.PaymentModule),
        data: {currentStep: 3, title: 'PAGE_TITLE.PAYMENT'},
      },

      {
        path: 'enter-mobile',
        loadChildren: () => import('../register/enter-mobile/enter-mobile.module').then(m => m.EnterMobileModule),
        data: {currentStep: 3, title: 'PAGE_TITLE.ENTER_MOBILE'}
      },
      {
        path: 'enter-code',
        loadChildren: () => import('../register/enter-code/enter-code.module').then(m => m.EnterCodeModule),
        data: {currentStep: 3, title: 'PAGE_TITLE.ENTER_CODE'}
      },
      {
        path: 'card-info',
        loadChildren: () => import('../register/card-info/card-info.module').then(m => m.CardInfoModule),
        data: {currentStep: 4, title: 'PAGE_TITLE.CARD_INFO'}
      },
      {
        path: 'destination-address',
        loadChildren: () => import('../register/destination-address/destination-address.module').then(m => m.DestinationAddressModule),
        data: {currentStep: 4, title: 'PAGE_TITLE.DESTINATION_ADDRESS'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
}
