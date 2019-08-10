import { Pipe, PipeTransform } from '@angular/core';
import { may } from '../models/may';

@Pipe({
  name: 'filtermay'
})
export class FiltermayPipe implements PipeTransform {

  transform(value: may[], tenmay: string): any {
    if (!tenmay) {
      return value;
    } else {
      if (tenmay) {
        value = value.filter(data => data.tenmay.toLowerCase().indexOf(tenmay.toLowerCase()) !== -1)
      }
    }
    return value;
  }
}
