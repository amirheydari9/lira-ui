import {Component, OnInit} from '@angular/core';
import {RegisterFacade} from "../../data-store/register-store/register.facade";
import {RegisterStatus} from "../../config/enum";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(
    public registerFacade: RegisterFacade
  ) {
  }

  ngOnInit(): void {

  }

  get RegisterStatus(): typeof RegisterStatus {
    return RegisterStatus
  }

}
