import {Component, OnInit} from '@angular/core';
import {RegisterFacade} from "../../data-store/register-store/register.facade";
import {RegisterStatus} from "../../config/enum";
import {AutoUnsubscribe} from "../../decorator/AutoUnSubscribe";
import {Subscription} from "rxjs";

@AutoUnsubscribe()
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  currentStep: number = 1
  subscription: Subscription

  constructor(
    public registerFacade: RegisterFacade,
  ) {
  }

  ngOnInit(): void {

    this.subscription = this.registerFacade.inquiryRegister$.subscribe(data => {
      switch (data.registerStatus) {
        case RegisterStatus.PRE_REGISTER || RegisterStatus.OPR_REJECTED || RegisterStatus.OPR_ACCEPTED:
          this.currentStep = 1;
          break
        case RegisterStatus.HOTEL_ADDRESS_CONFIRMED:
          this.currentStep = 4
          break
      }
    })
  }

  get RegisterStatus(): typeof RegisterStatus {
    return RegisterStatus
  }

}
