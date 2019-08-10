import { Pipe, PipeTransform } from '@angular/core';
import { sanpham } from 'src/app/shared/models/sanpham';

@Pipe({
  name: 'filtersanpham'
})
export class FiltersanphamPipe implements PipeTransform {

  transform(value: sanpham[], tensanpham:string): any {
    if(!tensanpham){
      return value;
    }else{
      if(tensanpham)
      {
        value=value.filter(data=>data.tensanpham.toLowerCase().indexOf(tensanpham.toLowerCase())!==-1)
      }
    }
   return value;
  }
}
