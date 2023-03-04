import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {SupportType} from "../config/enum";

@Pipe({
  name: 'supportType'
})
export class SupportTypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case SupportType.NORMAL:
        return "عادی"
      case SupportType.SPECIAL:
        return 'مخصوص'
      case SupportType.VIP:
        return 'ویژه'
    }
    return value;
  }
}

@NgModule({
  declarations: [SupportTypePipe],
  exports: [SupportTypePipe]
})
export class SupportTypePipeModule {

}
