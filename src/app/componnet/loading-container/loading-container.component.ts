import {Component, Input, NgModule, OnInit} from '@angular/core';
import {SkeletonModule} from "../skeleton/skeleton.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent implements OnInit {

  @Input() condition: boolean
  @Input() count: number = 2

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [LoadingContainerComponent],
  imports: [
    SkeletonModule,
    CommonModule
  ],
  exports: [LoadingContainerComponent]
})
export class LoadingContainerModule {

}
