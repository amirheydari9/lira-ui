import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {AutoUnsubscribe} from "../../decorator/AutoUnSubscribe";
import {Subscription} from "rxjs";

@AutoUnsubscribe({arrayName: 'subscription'})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title: string
  currentStep: number
  subscription: Subscription[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

    this.handleLayout()

    this.subscription.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.handleLayout()
        }
      })
    )
  }

  handleLayout() {
    this.subscription.push(
      this.activatedRoute.url.subscribe(() => {
        this.title = this.activatedRoute.snapshot.firstChild.firstChild.data['title']
        this.currentStep = this.activatedRoute.snapshot.firstChild.firstChild.data['currentStep']
      })
    )
  }

}
