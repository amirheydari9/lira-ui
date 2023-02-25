import {AfterViewInit, Directive, ElementRef, Input, NgModule, Renderer2} from '@angular/core';

@Directive({
  selector: '[currency]'
})
export class CurrencyDirective implements AfterViewInit {

  @Input() currencyFont: string;
  @Input() currencyColor: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngAfterViewInit(): void {
    const span = this.renderer.createElement('span')
    const text = this.renderer.createText('ریال')
    this.renderer.appendChild(span, text);
    this.renderer.addClass(span, this.currencyFont ? this.currencyFont : 'font-xs-regular')
    this.renderer.addClass(span, this.currencyColor ? this.currencyColor : 'text-natural-900')
    this.renderer.addClass(span, 'me-1')
    this.renderer.appendChild(this.el.nativeElement, span)
  }
}

@NgModule({
  declarations: [CurrencyDirective],
  exports: [CurrencyDirective]
})
export class CurrencyModule {

}
