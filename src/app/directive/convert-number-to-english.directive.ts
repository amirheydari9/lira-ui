import {Directive, ElementRef, HostListener, Input, NgModule, Renderer2} from '@angular/core';

@Directive({
  selector: '[convertNumberToEnglish]'
})
export class ConvertNumberToEnglishDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @Input() apply: boolean = true

  @HostListener('keyup')
  onKeyup() {
    const inputVal = this.elRef.nativeElement.value;
    if (this.apply) {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'value',
        this.convert2EnglishNumeral(inputVal)
      );
    }
  }

  @HostListener('input', ['$event'])
  onInputChange(event) {
    const inputVal = this.elRef.nativeElement.value;
    if (this.apply) {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'value',
        this.convert2EnglishNumeral(inputVal)
      );
    }
  }

  @HostListener('paste', ['$event'])
  onInputPaste(event: ClipboardEvent) {
    event.preventDefault()
    const inputVal = this.elRef.nativeElement.value;
    if (this.apply) {
      this.renderer.setProperty(
        this.elRef.nativeElement,
        'value',
        this.convert2EnglishNumeral(inputVal)
      );
    }
  }

  convert2EnglishNumeral(text: any): string {
    return text.toString().replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (c) => {
      return c.charCodeAt(0) & 0xf;
    });
  }

}

@NgModule({
  declarations: [ConvertNumberToEnglishDirective],
  imports: [],
  exports: [ConvertNumberToEnglishDirective]
})

export class ConvertNumberToEnglishDirectiveModule {

}
