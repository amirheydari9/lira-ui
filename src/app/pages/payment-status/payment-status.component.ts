import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISubmitTrxRes} from "../../model/interface/submit-trx-res.interface";
import {StorageService} from "../../service/storage.service";
import {PaymentStatus} from 'src/app/config/enum';
import {transactionDetails} from 'src/app/config/key';
import {SubmitTrxDTO} from "../../model/DTO/submit-trx.DTO";
import {ActivatedRoute, Router} from "@angular/router";
import {IpgFacade} from "../../data-store/ipg-store/ipg.facade";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent implements OnInit, OnDestroy {

  transactionDetails: ISubmitTrxRes
  subscription: Subscription

  constructor(
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute,
    private ipgFacade: IpgFacade,
    private router: Router,
  ) {
  }

  async ngOnInit(): Promise<void> {
    // اگه دوباره اومد تو این صفحه چی ؟

    const payload = new SubmitTrxDTO(
      +this.activatedRoute.snapshot.queryParams['MID'],
      this.activatedRoute.snapshot.queryParams['State'],
      +this.activatedRoute.snapshot.queryParams['Status'],
      this.activatedRoute.snapshot.queryParams['Rrn'],
      this.activatedRoute.snapshot.queryParams['RefNum'],
      this.activatedRoute.snapshot.queryParams['ResNum'],
      this.activatedRoute.snapshot.queryParams['TerminalId'],
      this.activatedRoute.snapshot.queryParams['TraceNo'],
      +this.activatedRoute.snapshot.queryParams['Amount'],
      +this.activatedRoute.snapshot.queryParams['AffectiveAmount'],
      +this.activatedRoute.snapshot.queryParams['Wage'],
      this.activatedRoute.snapshot.queryParams['SecurePan'],
      this.activatedRoute.snapshot.queryParams['Token'],
      this.activatedRoute.snapshot.queryParams['HashedCardNumber'],
    )
    await this.ipgFacade.submitTrx(payload)
    if (this.storageService.getSessionStorage(transactionDetails)) {
      this.transactionDetails = this.storageService.getSessionStorage(transactionDetails)
    }
  }

  get PaymentStatus(): typeof PaymentStatus {
    return PaymentStatus
  }

  handleGoToApp() {
    this.router.navigate(['/'])
  }

  ngOnDestroy() {
    this.storageService.removeSessionStorage(transactionDetails)
  }
}
