import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe03'
})
export class FilterPipe03Pipe implements PipeTransform {
  transform(listyeucaufilm: any[], id: number, ngayyeucau: string, gioyeucau: string, bophanyeucauid: string, tenyeucau: string, sanpham: string, loaiyeucau: string, loaiphim: string, may: string, sobo: number, x: string, y: string, nguoiyeucauid: string, noidungchitiet: string, xacnhan: number, thoigianxacnhan: string, ghichu: string, tailieudinhkem: string



  ): any {
    if (!id && !ngayyeucau && !gioyeucau && !bophanyeucauid && !tenyeucau && !sanpham && !loaiyeucau && !loaiphim && !may && !sobo && !x && !y && !nguoiyeucauid && !noidungchitiet && !xacnhan && !thoigianxacnhan && !ghichu && !tailieudinhkem

    ) {
      return listyeucaufilm;
    } else {
      if (id) {
        listyeucaufilm = listyeucaufilm.filter(x => x.id.toString().indexOf(id.toString()) !== -1)
      }
      if (ngayyeucau) {
        listyeucaufilm = listyeucaufilm.filter(x => x.ngayyeucau.toString().indexOf(ngayyeucau.toString()) !== -1)
      }
      if (gioyeucau) {
        listyeucaufilm = listyeucaufilm.filter(x => x.gioyeucau.toString().indexOf(gioyeucau.toString()) !== -1)
      }
      if (bophanyeucauid) {
        listyeucaufilm = listyeucaufilm.filter(x => x.bophanyeucauid.toString().indexOf(bophanyeucauid.toString()) !== -1)
      }
      if (tenyeucau) {
        listyeucaufilm = listyeucaufilm.filter(x => x.tenyeucau.toLowerCase().indexOf(tenyeucau.toLowerCase()) !== -1)
      }
      if (sanpham) {
        listyeucaufilm = listyeucaufilm.filter(x => x.sanpham.toLowerCase().indexOf(sanpham.toLowerCase()) !== -1)
      }
      if (loaiyeucau) {
        listyeucaufilm = listyeucaufilm.filter(x => x.loaiyeucau.toString().indexOf(loaiyeucau) !== -1)
      }
      if (loaiphim) {
        listyeucaufilm = listyeucaufilm.filter(x => x.loaiphim.toLowerCase().indexOf(loaiphim) !== -1)
      }
      if (may) {
        listyeucaufilm = listyeucaufilm.filter(x => x.may.toLowerCase().indexOf(may) !== -1)
      }
      if (sobo) {
        listyeucaufilm = listyeucaufilm.filter(x => x.sobo.toString().indexOf(sobo.toString()) !== -1)
      }
      if (x) {
        listyeucaufilm = listyeucaufilm.filter(a => a.x.toString().indexOf(x.toString()) !== -1)
      }
      if (y) {
        listyeucaufilm = listyeucaufilm.filter(x => x.y.toString().indexOf(y.toString()) !== -1)
      }
      if (nguoiyeucauid) {
        listyeucaufilm = listyeucaufilm.filter(x => x.nguoiyeucauid.toString().indexOf(nguoiyeucauid) !== -1)
      }
      if (noidungchitiet) {
        listyeucaufilm = listyeucaufilm.filter(x => x.noidungchitiet.toLowerCase().indexOf(noidungchitiet) !== -1)
      }
      if (xacnhan) {
        listyeucaufilm = listyeucaufilm.filter(x => x.xacnhan.toString().indexOf(xacnhan.toString()) !== -1)
      }
      if (thoigianxacnhan) {
        listyeucaufilm = listyeucaufilm.filter(x => x.thoigianxacnhan.toString().indexOf(thoigianxacnhan) !== -1)
      }
      if (ghichu) {
        listyeucaufilm = listyeucaufilm.filter(x => x.ghichu.toLowerCase().indexOf(ghichu) !== -1)
      }
      if (tailieudinhkem) {
        listyeucaufilm = listyeucaufilm.filter(x => x.tailieudinhkem.toLowerCase().indexOf(tailieudinhkem) !== -1)
      }
      return listyeucaufilm;
    }
  }

}
