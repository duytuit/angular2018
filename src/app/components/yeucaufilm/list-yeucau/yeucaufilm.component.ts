import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { YeucauService } from 'src/app/shared/services/yeucau.service';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/shared/services/ExportToExcel/excel.service';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { sanpham } from 'src/app/shared/models/sanpham';
import { may } from 'src/app/shared/models/may';
import { bophan } from 'src/app/shared/models/bophan';
import { giaoviec } from 'src/app/shared/models/giaoviec';
@Component({
  selector: 'app-yeucaufilm',
  templateUrl: './yeucaufilm.component.html',
  styleUrls: ['./yeucaufilm.component.css']

})
export class YeucaufilmComponent implements OnInit {

  @ViewChild('fromdate') fromdate: ElementRef;
  @ViewChild('todate') todate: ElementRef;
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
  getgiaoviec: giaoviec[]
  giaoviec: giaoviec[]
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

  constructor(private yeucauService: YeucauService, private router: Router, private excelService: ExcelService) {
  }
  ngOnInit() {
    this.yeucauService.GetAllloaiphim().subscribe(data => this.loaiphim = data);
    this.yeucauService.GetAllsanpham().subscribe(data => this.sanpham = data)
    this.yeucauService.GetAllmay().subscribe(data => this.may = data)
    this.yeucauService.GetAllbophan().subscribe(data => this.bophan = data)
    this.yeucauService.GetAllgiaoviec12().subscribe(data => this.giaoviec = data)
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
      this.getyeucau = this.yeucaufilm;
      for (let i = 0; i < this.getyeucau.length; i++) {
        this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau[i].loaiphimid)
        this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
        this.getmay = this.may.filter(data => data.id === this.getyeucau[i].mayid)
        this.getyeucau[i].sanpham = this.getsanpham[0].tensanpham
        this.getyeucau[i].loaiphim = this.getloaiphim[0].tenloaiphim
        this.getyeucau[i].may = this.getmay[0].tenmay
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
    this.getgiaoviec = this.giaoviec.filter(data => data.yeucauid === id)
    if (this.getgiaoviec.length>0) {
      this.thongbao = true
    } else {
      this.thongbao = false
      this.yeucauService.Deleteyeucau(id).subscribe(x => {
        this.GetAllyeucau1()
      });
    }
  }
  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.getyeucau, 'yêu cầu film');
  }
  GetAllyeucau1(){
    this.yeucauService.GetAllyeucau()
    this.yeucauService.GetAllyeucau().subscribe(data => {
      this.yeucaufilm = data;
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