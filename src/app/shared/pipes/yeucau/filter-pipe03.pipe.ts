import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe03'
})
export class FilterPipe03Pipe implements PipeTransform {
  transform(listyeucaufilm: any[], id: number, ca: string, ngay: string, gio: string, bophan: string, masanpham: string, phanloai: string, loaiphim: string, maydung: string, sobo: number, tylex: string, tyley: string, nguoiyeucau: string, noidungyeucau: string, xacnhanpe: string, xacnhancam: string, mayin: string, hientrang: string, giohoanthanh: string, ngayxuatxuong: string, ngaybaophe: string, noidungbaophe: string
  ): any {
    if (!id && !ca && !ngay && !gio && !bophan && !masanpham && !phanloai && !loaiphim && !maydung && !sobo && !tylex && !tyley && !nguoiyeucau && !noidungyeucau && !xacnhanpe && !xacnhancam && !mayin && !hientrang && !giohoanthanh && !ngayxuatxuong && !ngaybaophe && !noidungbaophe) {
      return listyeucaufilm;
    } else {
      if (id) {
        listyeucaufilm = listyeucaufilm.filter(x => x.id.toString().indexOf(id) !== -1)
      }
      if (ca) {
        listyeucaufilm = listyeucaufilm.filter(x => x.ca.toLowerCase().indexOf(ca) !== -1)
      }
      if (ngay) {
        listyeucaufilm = listyeucaufilm.filter(x => x.ngay.toLowerCase().indexOf(ngay) !== -1)
      }
      if (gio) {
        listyeucaufilm = listyeucaufilm.filter(x => x.gio.toLowerCase().indexOf(gio) !== -1)
      }
      if (bophan) {
        listyeucaufilm = listyeucaufilm.filter(x => x.bophan.toLowerCase().indexOf(bophan) !== -1)
      }
      if (masanpham) {
        listyeucaufilm = listyeucaufilm.filter(x => x.masanpham.toLowerCase().indexOf(masanpham) !== -1)
      }
      if (phanloai) {
        listyeucaufilm = listyeucaufilm.filter(x => x.phanloai.toLowerCase().indexOf(phanloai) !== -1)
      }
      if (loaiphim) {
        listyeucaufilm = listyeucaufilm.filter(x => x.loaiphim.toLowerCase().indexOf(loaiphim) !== -1)
      }
      if (maydung) {
        listyeucaufilm = listyeucaufilm.filter(x => x.maydung.toLowerCase().indexOf(maydung) !== -1)
      }
      if (sobo) {
        listyeucaufilm = listyeucaufilm.filter(x => x.sobo.toLowerCase().indexOf(sobo) !== -1)
      }
      if (tylex) {
        listyeucaufilm = listyeucaufilm.filter(x => x.tylex.toLowerCase().indexOf(tylex) !== -1)
      }
      if (tyley) {
        listyeucaufilm = listyeucaufilm.filter(x => x.tyley.toLowerCase().indexOf(tyley) !== -1)
      }
      if (nguoiyeucau) {
        listyeucaufilm = listyeucaufilm.filter(x => x.nguoiyeucau.toLowerCase().indexOf(nguoiyeucau) !== -1)
      }
      if (noidungyeucau) {
        listyeucaufilm = listyeucaufilm.filter(x => x.noidungyeucau.toLowerCase().indexOf(noidungyeucau) !== -1)
      }
      if (xacnhanpe) {
        listyeucaufilm = listyeucaufilm.filter(x => x.xacnhanpe.toLowerCase().indexOf(xacnhanpe) !== -1)
      }
      if (xacnhancam) {
        listyeucaufilm = listyeucaufilm.filter(x => x.xacnhancam.toLowerCase().indexOf(xacnhancam) !== -1)
      }
      if (mayin) {
        listyeucaufilm = listyeucaufilm.filter(x => x.mayin.toLowerCase().indexOf(mayin) !== -1)
      }
      if (hientrang) {
        listyeucaufilm = listyeucaufilm.filter(x => x.hientrang.toLowerCase().indexOf(hientrang) !== -1)
      }
      if (giohoanthanh) {
        listyeucaufilm = listyeucaufilm.filter(x => x.giohoanthanh.toLowerCase().indexOf(giohoanthanh) !== -1)
      }
      if (ngayxuatxuong) {
        listyeucaufilm = listyeucaufilm.filter(x => x.ngayxuatxuong.toLowerCase().indexOf(ngayxuatxuong) !== -1)
      }
      if (ngaybaophe) {
        listyeucaufilm = listyeucaufilm.filter(x => x.ngaybaophe.toLowerCase().indexOf(ngaybaophe) !== -1)
      }
      if (noidungbaophe) {
        listyeucaufilm = listyeucaufilm.filter(x => x.noidungbaophe.toLowerCase().indexOf(noidungbaophe) !== -1)
      }
      return listyeucaufilm;
    }
  }

}
