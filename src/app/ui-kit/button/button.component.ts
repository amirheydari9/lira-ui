import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppConfigService} from "../../service/app-config.service";

@Component({
  selector: 'app-button',
  template: `
    <div class="btn-wrapper d-flex align-items-center justify-content-center"
         [ngClass]="{'disabled':disabled && !loading,'round':round,'outline':type==='outline','primary':type==='primary'}">
      <button
        *ngIf="!loading;else elseBack"
        class="font-md-legacy-bold"
        [disabled]="disabled">
        {{label}}
      </button>
      <ng-template #elseBack>
        <img [src]="type==='primary'?'assets/images/btn_loading.gif':'assets/images/btn_loading_2.gif'" alt="loading"/>
      </ng-template>
    </div>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'primary' | 'outline' = 'primary'
  @Input() label: string
  @Input() disabled: boolean
  @Input() round: boolean

  loading: boolean

  constructor(
    private appConfigService: AppConfigService
  ) {
  }

  ngOnInit(): void {
    this.appConfigService.loading().subscribe(data => this.loading = data)
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
