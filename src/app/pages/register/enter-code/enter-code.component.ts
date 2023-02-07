import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent implements OnInit {

  otpIsValid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
