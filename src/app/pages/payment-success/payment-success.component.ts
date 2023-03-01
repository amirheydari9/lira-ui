import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubmitTrxDTO} from "../../model/DTO/submit-trx.DTO";
import {IpgFacade} from "../../data-store/ipg-store/ipg.facade";

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(
    private ipgFacade: IpgFacade,
    private activatedRoute: ActivatedRoute
  ) {
  }

  async ngOnInit(): Promise<void> {
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
  }

}
