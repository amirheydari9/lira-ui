import {Component, Input, NgModule} from '@angular/core';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

export type SkeletonSize = 'small' | 'medium' | 'large' | 'xlarge'

@Component({
  selector: 'app-skeleton',
  template: `
    <ngx-skeleton-loader
      [count]="count"
      [appearance]="appearance"
      [theme]="default"
    ></ngx-skeleton-loader>
  `,
})
export class SkeletonComponent {

  default = {'border-radius': '8px', height: '100px'}
  @Input() count: number = 1
  @Input() appearance: 'line' | 'circle' = 'line'

  @Input() set size(size: SkeletonSize) {
    switch (size) {
      case 'small':
        this.default = {...this.default, height: '50px'}
        break;
      case 'medium':
        this.default = {...this.default, height: '100px'}
        break;
      case 'large':
        this.default = {...this.default, height: '200px'}
        break;
      case 'xlarge':
        this.default = {...this.default, height: '400px'}
        break;
      default :
        this.default = {...this.default, height: '100px'}
    }
  }

  @Input() set theme(theme: object) {
    if (theme) this.default = {...this.default, ...theme}
  }

}

@NgModule({
  declarations: [SkeletonComponent],
  imports: [NgxSkeletonLoaderModule],
  exports: [SkeletonComponent]
})
export class SkeletonModule {

}
