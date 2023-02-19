import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleClick() {
    window.open(
      'https://app.vee.ir/callback?type=contract&&token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDEyMDkxODU1IiwiYXV0aG9yaXR5IjoidXNlcl9wYW5lbCIsImlzcyI6IkhhbXJhaCBMb3R1cyIsImV4cCI6MTY3Njc5Njk4OSwidXNlcklkIjo5NTU2LCJpc1Bhc3N3b3JkU2V0Ijp0cnVlLCJpYXQiOjE2NzY3OTYzODl9.Lnvdjm2E7fXob6CW8rrVhbBOGLBxvUWGsblLn_DrUkiV8ONwxe7r_K6it5KKn-pUjvynI2E3u3ITj12AovjbKw',
      '_parent'
    )
  }
}
