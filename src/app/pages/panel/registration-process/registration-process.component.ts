import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-process',
  templateUrl: './registration-process.component.html',
  styleUrls: ['./registration-process.component.scss']
})
export class RegistrationProcessComponent implements OnInit {

  requirements = [
    {title: 'REGISTER.REQUIREMENT_1', subTitle: 'REGISTER.REQUIREMENT_1_SUB', icon: 'req_1',},
    {title: 'REGISTER.REQUIREMENT_2', subTitle: 'REGISTER.REQUIREMENT_2_SUB', icon: 'req_2',},
    {title: 'REGISTER.REQUIREMENT_3', subTitle: 'REGISTER.REQUIREMENT_3_SUB', icon: 'req_3',},
    {title: 'REGISTER.REQUIREMENT_4', subTitle: 'REGISTER.REQUIREMENT_4_SUB', icon: 'req_4',},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

