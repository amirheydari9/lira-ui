import {Injectable} from '@angular/core';
import * as moment from "jalali-moment";

export type DateFormat = 'date' | 'iso' | 'dateTime'

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }

  convertGeorgianToJalali(date: string, format: string, dateFormat: DateFormat = 'dateTime'): string {
    const formatDate = this.transformDateTimeToDate(date, dateFormat)
    return moment(formatDate, 'YYYY-MM-DD').locale('fa').format(format);
  }

  diffBetweenDays(startDate: string, endDate: string, mode: 'start' | 'end' = 'end'): number {
    //TODO check format
    const start = new Date(startDate).getTime()
    let end = new Date(endDate).getTime()
    if (mode === 'end') end = end + 1000 * 3600 * 24
    const difference = end - start;
    return Math.ceil(difference / (1000 * 3600 * 24));
  }

  calculateBetweenDays(startDate: string, endDate: string): string[] {
    const betweenDates = []
    const m = moment(startDate, 'YYYY-MM-DD')
    for (let i = 0; i < this.diffBetweenDays(startDate, endDate, 'start') - 1; i++) {
      const date = m.add(1, 'day').format('YYYY-MM-DD')
      betweenDates.push(date)
    }
    return [startDate, ...betweenDates, endDate]
  }

  today(): string {
    return moment().format('YYYY-MM-DD')
  }

  transformDateTimeToDate(date: string, dateFormat: DateFormat = 'dateTime'): string {
    if (dateFormat === 'dateTime') {
      return date.split(' ')[0]
    } else if (dateFormat === 'iso') {
      return date.split('T')[0]
    }
    return date
  }

  addDays(date: string, add: number): string {
    return moment(date, 'YYYY-MM-DD').add(add,'days').format('YYYY-MM-DD')
  }

}
