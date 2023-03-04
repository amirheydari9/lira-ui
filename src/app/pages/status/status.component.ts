import {Component, OnInit} from '@angular/core';
import {RegisterFacade} from "../../data-store/register-store/register.facade";
import {PaymentStatus, RegisterStatus} from "../../config/enum";
import {ISubmitTrxRes} from "../../model/interface/submit-trx-res.interface";
import {StorageService} from "../../service/storage.service";
import {transactionDetails} from "../../config/key";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  transactionDetails: ISubmitTrxRes

  constructor(
    public registerFacade: RegisterFacade,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {
    if (this.storageService.getSessionStorage(transactionDetails)) {
      this.transactionDetails = this.storageService.getSessionStorage(transactionDetails)
    }
  }

  get RegisterStatus(): typeof RegisterStatus {
    return RegisterStatus
  }

  get PaymentStatus(): typeof PaymentStatus {
    return PaymentStatus
  }

}
