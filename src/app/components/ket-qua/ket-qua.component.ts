import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { giaoviec } from 'src/app/shared/models/giaoviec';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { sanpham } from 'src/app/shared/models/sanpham';
import { may } from 'src/app/shared/models/may';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { GiaoviecService } from 'src/app/shared/services/giaoviec.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExcelService } from 'src/app/shared/services/ExportToExcel/excel.service';
import { YeucauService } from 'src/app/shared/services/yeucau.service';
import { ketqua } from 'src/app/shared/models/ketqua';
import { KetquaService } from 'src/app/shared/services/ketqua.service';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-ket-qua',
  templateUrl: './ket-qua.component.html',
  styleUrls: ['./ket-qua.component.css']
})
export class KetQuaComponent implements OnInit {

  @Input() allgiaoviec: giaoviec;
  Statut = [];
  nhanviec: boolean = false;
  sua: boolean = false;

  idyeucau: number;
  yeucaufilm: yeucaufilm[];
  getyeucau: yeucaufilm[];

  loaiphim: loaiphim[];
  getloaiphim: loaiphim[];
  getloaiphim_kq: loaiphim[];

  sanpham: sanpham[];
  getsanpham: sanpham[];
  getsanpham_kq: sanpham[];
  may: may[];
  getmay: may[];
  getmay_kq: may[];

  giaoviec: giaoviec[];
  getgiaoviec: giaoviec[];

  giaoviec_kq: giaoviec[];
  getgiaoviec_kq: giaoviec[];

  ketqua: ketqua[];
  getketqua: ketqua[];

  yeucau_kq: yeucaufilm[];
  getyeucau_kq: yeucaufilm[];

  user: user[];
  getuser: user[];
  @ViewChild('fromdate') fromdate: ElementRef;
  @ViewChild('todate') todate: ElementRef;
  //thêm kết quả==================================================================================================
  addketqua = new FormGroup({
    boso: new FormControl(),
    trangthai: new FormControl(1),
    thoigianhoanthanh: new FormControl(''),
    thoigianbangiao: new FormControl(''),
    thoigianbaophe: new FormControl(''),
    taikhoanbaopheid: new FormControl(''),
    giaoviecid: new FormControl(),
    maloiid: new FormControl(''),
    ghichu: new FormControl(''),
  })
  constructor(
    private giaoviecService: GiaoviecService,
    private yeucauService: YeucauService,
    private router: Router,
    private excelService: ExcelService,
    private route: ActivatedRoute,
    private ketquaService: KetquaService
  ) { }

  ngOnInit() {
    this.yeucauService.GetAllloaiphim().subscribe(data => this.loaiphim = data);
    this.yeucauService.GetAllsanpham().subscribe(data => this.sanpham = data);
    this.yeucauService.GetAllmay().subscribe(data => this.may = data);
    this.yeucauService.GetAllyeucau().subscribe(data => this.yeucau_kq = data);
    this.giaoviecService.GetAllgiaoviec12().subscribe(data => this.giaoviec = data);
    this.ketquaService.GetAllketqua().subscribe(data => this.ketqua = data)
    this.ketquaService.GetAlluser().subscribe(data => this.user = data)
    this.Allketqua();
  }
  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.ketqua, 'kết quả yêu cầu');
  }
  Nhanviec() {
    // this.Allgiaoviec()
    this.nhanviec = true;
  }
  Allgiaoviec() {
    this.ketquaService.GetAlluser().subscribe(data => this.user = data)
    this.giaoviecService.GetAllgiaoviec12().subscribe(data => this.giaoviec = data);
    this.getgiaoviec = this.giaoviec
    for (let i = 0; i < this.getgiaoviec.length; i++) {

      this.getketqua = this.ketqua.filter(data => data.giaoviecid === this.getgiaoviec[i].id)
      if (this.getketqua.length === 1) {
        // this.getgiaoviec = this.getgiaoviec.splice(i = i - 1, 1)
        // this.getuser = this.user.filter(data => data.id === this.getgiaoviec[0].nguoithuchienid)
        // this.getgiaoviec[0].nguoithuchien = this.getuser[0].ten
      }
    }
    return this.getgiaoviec
  }
  Allketqua() {
    this.ketquaService.GetAllketqua().subscribe(data => {
      this.ketqua = data
      for (let i = 0; i < this.ketqua.length; i++) {
        this.getgiaoviec = this.giaoviec.filter(data => data.id === this.ketqua[i].giaoviecid)
        this.getyeucau_kq = this.yeucau_kq.filter(data => data.id === this.getgiaoviec[0].yeucauid)
        this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau_kq[0].loaiphimid)
        this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
        this.getmay = this.may.filter(data => data.id === this.getyeucau_kq[0].mayid)
        this.ketqua[i].tensanpham = this.getsanpham[0].tensanpham
        this.ketqua[i].loaiphim = this.getloaiphim[0].tenloaiphim
        this.ketqua[i].may = this.getmay[0].tenmay
        this.ketqua[i].thoigianyeucau = this.getyeucau_kq[0].thoigianyeucau
        this.ketqua[i].x = this.getyeucau_kq[0].x
        this.ketqua[i].y = this.getyeucau_kq[0].y
        this.ketqua[i].noidungchitiet = this.getyeucau_kq[0].noidungchitiet
        this.ketqua[i].thoigianxacnhan = this.getyeucau_kq[0].thoigianxacnhan
        this.ketqua[i].ghichu_yeucau = this.getyeucau_kq[0].ghichu
        this.ketqua[i].tailieudinhkem = this.getyeucau_kq[0].tailieudinhkem
      }
      return this.ketqua
    });
  }
  checkbox(id: number) {
    // id:giao việc
    // thêm mới kết quả =========================================
    let idgiaoviec = id
    this.ketquaService.GetAllketqua().subscribe(data => this.ketqua = data)
    this.yeucauService.GetAllloaiphim().subscribe(data => this.loaiphim = data);
    this.yeucauService.GetAllsanpham().subscribe(data => this.sanpham = data);
    this.yeucauService.GetAllmay().subscribe(data => this.may = data);
    this.yeucauService.GetAllyeucau().subscribe(data => this.yeucau_kq = data);
    this.giaoviecService.GetAllgiaoviec12().subscribe(data => this.giaoviec = data);
    this.getgiaoviec = this.giaoviec.filter(data => data.id = id)
    this.getyeucau_kq = this.yeucau_kq.filter(data => data.id === this.getgiaoviec[0].yeucauid)
    this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau_kq[0].loaiphimid)
    this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
    let idsp = []
    let idlp = []
    let idm = []
    idsp.push(this.getsanpham[0].id)
    idlp.push(this.getyeucau_kq[0].loaiphimid)
    idm.push(this.getyeucau_kq[0].mayid)
    let idsanphamnew = Math.max.apply(null, idsp)
    let idloaiphimnew = Math.max.apply(null, idlp)
    let idmaynew = Math.max.apply(null, idm)
    let maxBoso = []
    let boso1: number = 1
    let soluong: number
    soluong = this.getyeucau_kq[0].sobo
    this.getyeucau_kq = null
    if (this.ketqua != null) {
      for (let i = 0; i < this.ketqua.length; i++) {
        this.getgiaoviec_kq = this.giaoviec.filter(data => data.id === this.ketqua[i].giaoviecid)
        if (this.getgiaoviec_kq.length > 0) {
          this.getyeucau_kq = this.yeucau_kq.filter(data => data.id === this.getgiaoviec_kq[0].yeucauid)
          this.getloaiphim_kq = this.loaiphim.filter(data => data.id === this.getyeucau_kq[0].loaiphimid)
          this.getsanpham_kq = this.sanpham.filter(data => data.id === this.getloaiphim_kq[0].sanphamid)
          let idsp1 = []
          let idlp1 = []
          let idm1 = []
          idsp1.push(this.getsanpham_kq[0].id)
          idlp1.push(this.getyeucau_kq[0].loaiphimid)
          idm1.push(this.getyeucau_kq[0].mayid)
          let idsanphamcurrent = Math.max.apply(null, idsp1)
          let idloaiphimcurrent = Math.max.apply(null, idlp1)
          let idmaycurrent = Math.max.apply(null, idm1)
          if ((idsanphamcurrent === idsanphamnew) && (idloaiphimcurrent === idloaiphimnew) && (idmaycurrent === idmaynew)) {
            maxBoso.push(this.ketqua[i].boso)
            boso1 = Math.max.apply(null, maxBoso) + 1
          }
        } else {
          boso1 = boso1
        }
      }
      boso1 = boso1
    }
    if (soluong > 0) {
      for (let i = 0; i < soluong; i++) {
        this.addketqua.controls['boso'].reset(boso1)
        this.addketqua.controls['giaoviecid'].reset(idgiaoviec)
        this.ketquaService.Addketqua(this.addketqua.value).subscribe()
        boso1=boso1+1
      }
      this.ketquaService.GetAllketqua()
    }
  }
  close(){
    this.Allketqua()
  }
  refresh(){
    this.Allketqua()
  }
}



