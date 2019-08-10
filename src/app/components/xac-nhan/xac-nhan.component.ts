import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { sanpham } from 'src/app/shared/models/sanpham';
import { may } from 'src/app/shared/models/may';
import { bophan } from 'src/app/shared/models/bophan';
import { YeucauService } from 'src/app/shared/services/yeucau.service';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/shared/services/ExportToExcel/excel.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-xac-nhan',
  templateUrl: './xac-nhan.component.html',
  styleUrls: ['./xac-nhan.component.css']
})
export class XacNhanComponent implements OnInit {
  @ViewChild('fromdate') fromdate: ElementRef;
  @ViewChild('todate') todate: ElementRef;
  idyeucau:number
  loaiyeucau:number
  tylecodinh:number
  tylex:number
  tyley:number
  noidung:string
  ghichu:string
  soluong:number
  thoigianyeucau:string
  idloaiphim:number
  idmay:number
  idbophan:number
  idsanpham:number
  idnguoiyeucau:string
  tailieu:string

  thongbao: boolean = false
  yeucaufilm: yeucaufilm[];
  getyeucau: yeucaufilm[];
  loaiphim: loaiphim[];
  getloaiphim: loaiphim[];
  sanpham: sanpham[];
  getsanpham: sanpham[];
  may: may[];
  getmay: may[];
  bophan: bophan[];
  getbophan: bophan[];
  yeucau_xn:yeucaufilm[];
  // filterid: number;
  // filterngayyeucau:string;
  // filtergioyeucau:string;
  // filterbophanyeucauid: string;
  // filtertenyeucau : string;
  // filtersanpham:string;
  // filterloaiyeucau: string;
  // filterloaiphim: string; 
  // filtermay: string ;
  // filtersobo: number;
  // filterx: string;
  // filtery: string;
  // filternguoiyeucauid: string;
  // filternoidungchitiet: string;
  // filterxacnhan: number;
  // filterthoigianxacnhan: string;
  // filterghichu: string; 
  // filtertailieudinhkem: string; 
  addyeucau = new FormGroup(
    {
      id:new FormControl(),
      mayeucau: new FormControl(),
      tenyeucau: new FormControl(),
      loaiyeucau: new FormControl(),
      tilycodinh: new FormControl(),
      x: new FormControl(),
      y: new FormControl(),
      noidungchitiet: new FormControl(),
      ghichu: new FormControl(),
      tailieudinhkem: new FormControl(),

      xacnhan: new FormControl(1),
      sobo: new FormControl(),
      thoigianyeucau: new FormControl(),
      loaiphimid: new FormControl(),
      mayid: new FormControl(),
      bophanyeucauid: new FormControl(),
      samphamid: new FormControl(),
      nguoiyeucauid: new FormControl(),
      nguoixacnhanid: new FormControl(1),
      thoigianxacnhan: new FormControl(),
    }
  );
  constructor(private yeucauService: YeucauService, private router: Router, private excelService: ExcelService) {
  }
  ngOnInit() {
    this.yeucauService.GetAllloaiphim().subscribe(data => this.loaiphim = data);
    this.yeucauService.GetAllsanpham().subscribe(data => this.sanpham = data)
    this.yeucauService.GetAllmay().subscribe(data => this.may = data)
    this.yeucauService.GetAllbophan().subscribe(data => this.bophan = data)
    this.GetAllyeucau1()
  }
  ngOnDestroy(): void {
  }
  // Deleteyeucau():void {
  //   this.yeucauService.Deleteyeucau(this.list).subscribe();
  //   //this.yeucauService.GetAllyeucau().subscribe(data => this.yeucaufilm = data);
  // }
  GetyeucauBydate(fromdate: string, todate: string): void {
    this.yeucauService.GetAllyeucau().subscribe(data => {
      this.yeucaufilm = data.filter(data => Date.parse(data.thoigianyeucau) > Date.parse(fromdate) && Date.parse(data.thoigianyeucau) <= Date.parse(todate))
      this.getyeucau = this.yeucaufilm.filter(data => data.xacnhan === 0);
      for (let i = 0; i < this.getyeucau.length; i++) {
        this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau[i].loaiphimid)
        this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
        this.getmay = this.may.filter(data => data.id === this.getyeucau[i].mayid)
        this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau[i].bophanyeucauid)
        this.getyeucau[i].sanpham = this.getsanpham[0].tensanpham
        this.getyeucau[i].loaiphim = this.getloaiphim[0].tenloaiphim
        this.getyeucau[i].may = this.getmay[0].tenmay
        this.getyeucau[i].bophan = this.getbophan[0].Name
        if (this.getyeucau[i].loaiyeucau === 1) {
          this.getyeucau[i].phanloai = "hàng mới"
        }
        if (this.getyeucau[i].loaiyeucau === 2) {
          this.getyeucau[i].phanloai = "làm lại"
        }
        if (this.getyeucau[i].loaiyeucau === 3) {
          this.getyeucau[i].phanloai = "thay đổi"
        }
        if (this.getyeucau[i].xacnhan === 1 ) {
          this.getyeucau[i].tinhtrang = "đã x.nhận"
        }
        if (this.getyeucau[i].xacnhan === 0) {
          this.getyeucau[i].tinhtrang = "chưa x.nhận"
        }
      }
      return this.getyeucau
    });
  }
  refresh(): void {
    this.fromdate.nativeElement.value = '';
    this.todate.nativeElement.value = '';
    this.GetAllyeucau1()
  }
  checkbox(id: number) {
    this.yeucau_xn=this.getyeucau.filter(data=>data.id===id)
    this.getloaiphim=this.loaiphim.filter(data=>data.id===this.yeucau_xn[0].loaiphimid)
    this.getsanpham=this.sanpham.filter(data=>data.id===this.getloaiphim[0].sanphamid)
    this.getmay=this.may.filter(data=>data.id===this.yeucau_xn[0].mayid)
    this.getbophan=this.bophan.filter(data=>data.Id===this.yeucau_xn[0].bophanyeucauid)
    this.loaiyeucau=this.yeucau_xn[0].loaiyeucau
    this.tylecodinh=this.yeucau_xn[0].tilycodinh
    this.tylex=this.yeucau_xn[0].x
    this.tyley=this.yeucau_xn[0].y
    this.noidung=this.yeucau_xn[0].noidungchitiet
    this.ghichu=this.yeucau_xn[0].ghichu
    this.soluong=this.yeucau_xn[0].sobo
    this.thoigianyeucau=this.yeucau_xn[0].thoigianyeucau
    this.idloaiphim=this.yeucau_xn[0].loaiphimid
    this.idmay=this.yeucau_xn[0].mayid
    this.idbophan=this.yeucau_xn[0].bophanyeucauid
    this.idsanpham=this.getloaiphim[0].sanphamid
    this.idnguoiyeucau=this.yeucau_xn[0].nguoiyeucauid
    this.tailieu=this.yeucau_xn[0].tailieudinhkem
    this.idyeucau=id
    this.thongbao=true
  }
  onAddyeucau(){
    this.addyeucau.controls['tenyeucau'].reset('Yêu cầu mới');
    this.addyeucau.controls['xacnhan'].reset(1);
    this.addyeucau.controls['thoigianxacnhan'].reset(formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US'));
    this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
      this.GetAllyeucau1()
    })
    
  }
  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.getyeucau, 'yêu cầu film');
  }
  GetAllyeucau1(){
    this.yeucauService.GetAllyeucau()
    this.yeucauService.GetAllyeucau().subscribe(data => {
      this.yeucaufilm = data.filter(data=>data.xacnhan===0);
      this.getyeucau = this.yeucaufilm;
      for (let i = 0; i < this.getyeucau.length; i++) {
        this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau[i].loaiphimid)
        this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
        this.getmay = this.may.filter(data => data.id === this.getyeucau[i].mayid)
        this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau[i].bophanyeucauid)
        this.getyeucau[i].sanpham = this.getsanpham[0].tensanpham
        this.getyeucau[i].loaiphim = this.getloaiphim[0].tenloaiphim
        this.getyeucau[i].may = this.getmay[0].tenmay
        this.getyeucau[i].bophan = this.getbophan[0].Name
        if (this.getyeucau[i].loaiyeucau === 1) {
          this.getyeucau[i].phanloai = "hàng mới"
        }
        if (this.getyeucau[i].loaiyeucau === 2) {
          this.getyeucau[i].phanloai = "làm lại"
        }
        if (this.getyeucau[i].loaiyeucau === 3) {
          this.getyeucau[i].phanloai = "thay đổi"
        }
        if (this.getyeucau[i].xacnhan === 1 ) {
          this.getyeucau[i].tinhtrang = "đã x.nhận"
        }
        if (this.getyeucau[i].xacnhan === 0) {
          this.getyeucau[i].tinhtrang = "chưa x.nhận"
        }
      }
      return this.getyeucau
    });
  }
}
