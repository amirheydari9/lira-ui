import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<router-outlet></router-outlet>`
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
