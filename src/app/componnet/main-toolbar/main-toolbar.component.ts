import {Component, Input, NgModule, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NavigationEnd, Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Subscription} from "rxjs";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {NavigationService} from "../../service/navigation.service";
import {TitleService} from "../../service/title.service";
import {SvgIconModule} from "../svg-icon/svg-icon.component";
import {AutoUnsubscribe} from "../../decorator/AutoUnSubscribe";

@AutoUnsubscribe({arrayName: 'subscription'})
@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Input() showSupport: boolean
  @Input() bgColor: string

  title: string
  showBackButton: boolean = false
  subscription: Subscription[] = []

  doNotShowBackButtonRoutes = [
    '/',
  ]

  routes = [
    {url: '/choose-service', name: "CHOOSE_SERVICE"},
    {url: '/service', name: "SERVICE"},
    {url: '/terms-and-conditions', name: "TERMS_AND_CONDITIONS"},
    {url: '/registration-process', name: "REGISTRATION_PROCESS"},
  ]

  constructor(
    private titlesService: TitleService,
    public navigationService: NavigationService,
    private router: Router,
    private translateService: TranslateService
  ) {
  }

  ngOnInit() {
    this.handleShowBackButton(this.router.url)
    this.handleTitle(this.router.url)

    this.subscription.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.handleTitle(event.url)
          this.handleShowBackButton(event.url)
        }
      })
    )
  }

  handleShowBackButton(url: string): void {
    this.doNotShowBackButtonRoutes.includes(url.split('?')[0]) ? this.showBackButton = false : this.showBackButton = true
  }

  handleTitle(url: string): void {
    const replaceUrl = url.split('?')[0]
    const route = this.routes.find(route => route.url === replaceUrl)
    if (route) {
      this.subscription.push(
        this.translateService.get(`PAGE_TITLE.${route.name}`).subscribe(data =>
          this.title = data
        )
      )
    } else {
      this.title = ''
    }
  }
}

@NgModule({
  declarations: [MainToolbarComponent],
  exports: [MainToolbarComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule, SvgIconModule, TranslateModule]
})
export class MainToolbarModule {
}
