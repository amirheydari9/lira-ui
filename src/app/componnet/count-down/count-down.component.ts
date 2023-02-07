import {Component, EventEmitter, Input, NgModule, OnInit, Output, ViewChild} from '@angular/core';
import {CountdownComponent, CountdownConfig, CountdownEvent, CountdownModule} from "ngx-countdown";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-count-down',
  template: `
    <countdown
      #cd
      [config]="countDownConfig"
      (event)="handleEvent($event)"
    ></countdown>
  `,
})
export class CountDownComponent implements OnInit {

  private _countDownConfig: CountdownConfig = {
    leftTime: 120,
    format: 'mm:ss'
  };


  @Input()
  set countDownConfig(value: CountdownConfig) {
    this._countDownConfig = {
      ...this.countDownConfig,
      ...value
    }
  }

  get countDownConfig(): CountdownConfig {
    return this._countDownConfig
  }


  @Output() timeLeft: EventEmitter<void> = new EventEmitter<void>()

  @ViewChild('cd', {static: true}) private countdown: CountdownComponent;

  constructor() {
  }

  ngOnInit(): void {
    this.countdown.begin();
  }

  restart() {
    this.countdown.restart();
  }

  handleEvent($event: CountdownEvent) {
    if ($event.status === 3) {
      this.timeLeft.emit()
    }
  }
}

@NgModule({
  declarations: [CountDownComponent],
  exports: [CountDownComponent],
  imports: [CountdownModule, CommonModule],
})
export class CountDownModule {

}
