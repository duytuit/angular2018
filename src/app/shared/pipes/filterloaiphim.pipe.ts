import { Pipe, PipeTransform } from '@angular/core';
import { loaiphim } from '../models/loaiphim';

@Pipe({
  name: 'filterloaiphim'
})
export class FilterloaiphimPipe implements PipeTransform {

  transform(value: loaiphim[], tenloaiphim: string): any {
    if (!tenloaiphim) {
      return value;
    } else {
      if (tenloaiphim) {
        value = value.filter(data => data.tenloaiphim.toLowerCase().indexOf(tenloaiphim.toLowerCase()) !== -1)
      }
    }
    return value;
  }

}
