import {ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UpdateService} from "./service/update.service";
import {NavigationService} from "./service/navigation.service";
import {RegisterFacade} from "./data-store/register-store/register.facade";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'lira';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private navigationService: NavigationService,
    private elementRef: ElementRef,
    private updateService: UpdateService,
    private registerFacade: RegisterFacade
  ) {
    this.updateService.checkForUpdates();
  }

  async ngOnInit(): Promise<void> {
    this.navigationService.startSaveHistory()
    this.elementRef.nativeElement.removeAttribute('ng-version')
    // await this.registerFacade.inquiryRegister()
    // this.registerFacade.inquiryRegister$.subscribe(data => {
    //   if (data) {
    //     this.router.navigate(['/service/2'])
    //   }
    // })
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.activatedRoute.children) {
          const childRoutes = this.activatedRoute.children;
          childRoutes.forEach((childRoute) => {
            childRoute.routeConfig.children?.forEach((route) => {
              if (!route.canActivate && !route.canLoad && route.loadChildren) route.loadChildren();
            });
          });
        }
      }
    });
  }

}
