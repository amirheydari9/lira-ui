import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register.component";
import {PersonalInfoGuard} from "../../guard/personal-info.guard";
import {PaymentGuard} from "../../guard/payment.guard";
import {AddressGuard} from "../../guard/address.guard";
import {HotelAddressGuard} from "../../guard/hotel-address.guard";

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
        data: {currentStep: 1, title: 'PAGE_TITLE.PERSONAL_INFO'},
        canActivate: [PersonalInfoGuard]
      },
      {
        path: 'passport-info',
        loadChildren: () => import('../register/passport-info/passport-info.module').then(m => m.PassportInfoModule),
        data: {currentStep: 1, title: 'PAGE_TITLE.PASSPORT_INFO'},
        canActivate: [PersonalInfoGuard]
      },
      {
        path: 'upload-document',
        loadChildren: () => import('../register/upload-document/upload-document.module').then(m => m.UploadDocumentModule),
        data: {currentStep: 1, title: 'PAGE_TITLE.PASSPORT_INFO'},
        canActivate: [PersonalInfoGuard]
      },
      {
        path: 'address',
        loadChildren: () => import('../register/address/address.module').then(m => m.AddressModule),
        data: {currentStep: 2, title: 'PAGE_TITLE.ADDRESS'},
        canActivate: [AddressGuard]
      },
      {
        path: 'payment',
        loadChildren: () => import('../register/payment/payment.module').then(m => m.PaymentModule),
        data: {currentStep: 3, title: 'PAGE_TITLE.PAYMENT'},
        canActivate: [PaymentGuard]
      },
      {
        path: 'hotel-address',
        loadChildren: () => import('../register/hotel-address/hotel-address.module').then(m => m.HotelAddressModule),
        data: {currentStep: 4, title: 'PAGE_TITLE.HOTEL_ADDRESS'},
        canActivate: [HotelAddressGuard]
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
