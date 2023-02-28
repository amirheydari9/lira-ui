import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {DateFormat, DateService} from "../service/date.service";

@Pipe({
  name: 'jalaliDate'
})
export class JalaliDatePipe implements PipeTransform {

  constructor(
    private dateService: DateService
  ) {
  }

  transform(value: string, format: string, dateFormat?: DateFormat, ...args: unknown[]): string {
    if (value) {
      return this.dateService.convertGeorgianToJalali(value, format, dateFormat)
    }
    return null
  }

}

@NgModule({
  declarations: [JalaliDatePipe],
  exports: [JalaliDatePipe]
})
export class JalaliDatePipeModule {

}
