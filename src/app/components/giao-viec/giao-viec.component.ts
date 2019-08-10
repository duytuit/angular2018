import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { YeucauService } from 'src/app/shared/services/yeucau.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExcelService } from 'src/app/shared/services/ExportToExcel/excel.service';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { sanpham } from 'src/app/shared/models/sanpham';
import { may } from 'src/app/shared/models/may';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { GiaoviecService } from 'src/app/shared/services/giaoviec.service';
import { giaoviec } from 'src/app/shared/models/giaoviec';
import { bophan } from 'src/app/shared/models/bophan';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-giao-viec',
  templateUrl: './giao-viec.component.html',
  styleUrls: ['./giao-viec.component.css']
})
export class GiaoViecComponent implements OnInit {
 @Input() allgiaoviec:giaoviec;
 showDropDownuser:boolean=false
  them: boolean = false;
  sua: boolean = false;
  idyeucau:number;
  yeucaufilm1: yeucaufilm[];
  getyeucau1: yeucaufilm[];
  loaiphim: loaiphim[];
  getloaiphim: loaiphim[];
  sanpham: sanpham[];
  getsanpham: sanpham[];
  may: may[];
  getmay: may[];
  bophan: bophan[];
  getbophan: bophan[];
  user:user[];
  getuser:user[];
  iduser:number;
  tenuser:string;
  giaoviec:giaoviec[];
  getgiaoviec:giaoviec[];
  @ViewChild('fromdate') fromdate: ElementRef;
  @ViewChild('todate') todate: ElementRef;
//them giao viec==================================================================================================
addgiaoviec= new FormGroup({
  id:new FormControl(),
  thoigiangiaoviec:new FormControl(formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US')),
  nguoithuchienid:new FormControl(),
  ghichu:new FormControl('', Validators.compose([Validators.required])),
  yeucauid:new FormControl(),
})
  constructor(
     private giaoviecService:GiaoviecService,
     private yeucauService: YeucauService,
     private router: Router,
     private excelService: ExcelService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.yeucauService.GetAllloaiphim().subscribe(data => this.loaiphim = data);
    this.yeucauService.GetAllsanpham().subscribe(data => this.sanpham = data)
    this.yeucauService.GetAllmay().subscribe(data => this.may = data)
    this.yeucauService.GetAllbophan().subscribe(data => this.bophan = data)
    this.giaoviecService.GetAllgiaoviec12().subscribe(data=>this.giaoviec=data)
    this.giaoviecService.GetAlluser().subscribe(data=>this.user=data)
    this.Allyeucau()
  }
  // selectValueuser(value: user) {
  //     this.iduser = value.id;
  //     this.tenuser = value.ten;
  //     this.addgiaoviec.controls['nguoithuchienid'].reset(this.iduser)
  // }
  closeDropDownuser() {
    this.showDropDownuser = !this.showDropDownuser;
  }
  openDropDownuser() {
    this.showDropDownuser = !this.showDropDownuser;
  }
  GetyeucauBydate(fromdate: string, todate: string): void {
    this.yeucauService.GetAllyeucau().subscribe(data => {
      this.yeucaufilm1 = data.filter(data => Date.parse(data.thoigianyeucau) > Date.parse(fromdate) && Date.parse(data.thoigianyeucau) <= Date.parse(todate))
      this.getyeucau1 = this.yeucaufilm1.filter(data => data.xacnhan === 1);
      for (let i = 0; i < this.getyeucau1.length; i++) {
        this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau1[i].loaiphimid)
        this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
        this.getmay = this.may.filter(data => data.id === this.getyeucau1[i].mayid)
        this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau1[i].bophanyeucauid)
        this.getgiaoviec=this.giaoviec.filter(data=>data.yeucauid===this.getyeucau1[i].id)
        this.getyeucau1[i].sanpham = this.getsanpham[0].tensanpham
        this.getyeucau1[i].loaiphim = this.getloaiphim[0].tenloaiphim
        this.getyeucau1[i].may = this.getmay[0].tenmay
        this.getyeucau1[i].bophan = this.getbophan[0].Name
        if (this.getyeucau1[i].loaiyeucau === 1) {
          this.getyeucau1[i].phanloai = "hàng mới"
        }
        if (this.getyeucau1[i].loaiyeucau === 2) {
          this.getyeucau1[i].phanloai = "làm lại"
        }
        if (this.getyeucau1[i].loaiyeucau === 3) {
          this.getyeucau1[i].phanloai = "thay đổi"
        }
        if (this.getyeucau1[i].xacnhan === 1) {
          this.getyeucau1[i].tinhtrang = "đã x.nhận"
        }
        if (this.getyeucau1[i].xacnhan === 0) {
          this.getyeucau1[i].tinhtrang = "chưa x.nhận"
        }
        if(this.getgiaoviec.length===1)
        {
          this.getyeucau1[i].status="Xem"
        }else
        {
          this.getyeucau1[i].status="Tạo"
        }
      }
      return this.getyeucau1
    });
  }
  refresh(): void {
    this.fromdate.nativeElement.value = '';
    this.todate.nativeElement.value = '';
      this.Allyeucau()
  }
  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.getyeucau1, 'yêu cầu film');
  }
  View(id: number) {
   this.getgiaoviec=this.giaoviec.filter(data=>data.yeucauid===id)
   if(this.getgiaoviec.length===1)
   {
    // this.getuser=this.user.filter(data=>data.id===this.getgiaoviec[0].nguoithuchienid)
    // this.tenuser=this.getuser[0].ten
    //  this.idyeucau=id;
    //  this.sua = true;
    //  this.them=false;
     
    //  this.giaoviecService.GetgiaoviecbyID(this.getgiaoviec[0].id).subscribe(data=>this.allgiaoviec=data)
   }else
   {
      this.addgiaoviec.controls['id'].reset('');
      this.addgiaoviec.controls['ghichu'].reset('');
      this.idyeucau=id;
      this.tenuser="";
      this.them =true;
      this.sua=false;
   }
  }
  Allyeucau(){
      this.yeucauService.GetAllyeucau().subscribe(data => {
        this.yeucaufilm1 = data;
        this.getyeucau1 = this.yeucaufilm1.filter(data =>data.xacnhan === 1);
        for (let i = 0; i < this.getyeucau1.length; i++) {
          this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau1[i].loaiphimid)
          this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
          this.getmay = this.may.filter(data => data.id === this.getyeucau1[i].mayid)
          this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau1[i].bophanyeucauid)
          this.getgiaoviec=this.giaoviec.filter(data=>data.yeucauid===this.getyeucau1[i].id)
          this.getyeucau1[i].sanpham = this.getsanpham[0].tensanpham
          this.getyeucau1[i].loaiphim = this.getloaiphim[0].tenloaiphim
          this.getyeucau1[i].may = this.getmay[0].tenmay
          this.getyeucau1[i].bophan = this.getbophan[0].Name
          if (this.getyeucau1[i].loaiyeucau === 1) {
            this.getyeucau1[i].phanloai = "hàng mới"
          }
          if (this.getyeucau1[i].loaiyeucau === 2) {
            this.getyeucau1[i].phanloai = "làm lại"
          }
          if (this.getyeucau1[i].loaiyeucau === 3) {
            this.getyeucau1[i].phanloai = "thay đổi"
          }
          if (this.getyeucau1[i].xacnhan === 1) {
            this.getyeucau1[i].tinhtrang = "đã x.nhận"
          }
          if (this.getyeucau1[i].xacnhan === 0) {
            this.getyeucau1[i].tinhtrang = "chưa x.nhận"
          }
          if(this.getgiaoviec.length===1)
          {
            this.getyeucau1[i].status="Xem"
          }else
          {
            this.getyeucau1[i].status="Tạo"
          }
        }
        return this.getyeucau1
      })
  }
  onEditgiaoviec(){
    this.giaoviecService.Updategiaoviec(this.addgiaoviec.value).subscribe(x=>{
      this.yeucauService.GetAllyeucau().subscribe(data => {
        this.yeucaufilm1 = data;
        this.getyeucau1 = this.yeucaufilm1.filter(data =>data.xacnhan === 1);
        for (let i = 0; i < this.getyeucau1.length; i++) {
          this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau1[i].loaiphimid)
          this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
          this.getmay = this.may.filter(data => data.id === this.getyeucau1[i].mayid)
          this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau1[i].bophanyeucauid)
          this.getgiaoviec=this.giaoviec.filter(data=>data.yeucauid===this.getyeucau1[i].id)
          this.getyeucau1[i].sanpham = this.getsanpham[0].tensanpham
          this.getyeucau1[i].loaiphim = this.getloaiphim[0].tenloaiphim
          this.getyeucau1[i].may = this.getmay[0].tenmay
          this.getyeucau1[i].bophan = this.getbophan[0].Name
          if (this.getyeucau1[i].loaiyeucau === 1) {
            this.getyeucau1[i].phanloai = "hàng mới"
          }
          if (this.getyeucau1[i].loaiyeucau === 2) {
            this.getyeucau1[i].phanloai = "làm lại"
          }
          if (this.getyeucau1[i].loaiyeucau === 3) {
            this.getyeucau1[i].phanloai = "thay đổi"
          }
          if (this.getyeucau1[i].xacnhan === 1) {
            this.getyeucau1[i].tinhtrang = "đã x.nhận"
          }
          if (this.getyeucau1[i].xacnhan === 0) {
            this.getyeucau1[i].tinhtrang = "chưa x.nhận"
          }
          this.getyeucau1[i].status=""
        }
        return this.getyeucau1
      });
    });
    
  }
  onAddgiaoviec(){
      this.giaoviecService.Addgiaoviec(this.addgiaoviec.value).subscribe(x=>{
        this.yeucauService.GetAllyeucau().subscribe(data => {
          this.yeucaufilm1 = data;
          this.getyeucau1 = this.yeucaufilm1.filter(data =>data.xacnhan === 1);
          for (let i = 0; i < this.getyeucau1.length; i++) {
            this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau1[i].loaiphimid)
            this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
            this.getmay = this.may.filter(data => data.id === this.getyeucau1[i].mayid)
            this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau1[i].bophanyeucauid)
            this.getgiaoviec=this.giaoviec.filter(data=>data.yeucauid===this.getyeucau1[i].id)
            this.getyeucau1[i].sanpham = this.getsanpham[0].tensanpham
            this.getyeucau1[i].loaiphim = this.getloaiphim[0].tenloaiphim
            this.getyeucau1[i].may = this.getmay[0].tenmay
            this.getyeucau1[i].bophan = this.getbophan[0].Name
            if (this.getyeucau1[i].loaiyeucau === 1) {
              this.getyeucau1[i].phanloai = "hàng mới"
            }
            if (this.getyeucau1[i].loaiyeucau === 2) {
              this.getyeucau1[i].phanloai = "làm lại"
            }
            if (this.getyeucau1[i].loaiyeucau === 3) {
              this.getyeucau1[i].phanloai = "thay đổi"
            }
            if (this.getyeucau1[i].xacnhan === 1) {
              this.getyeucau1[i].tinhtrang = "đã x.nhận"
            }
            if (this.getyeucau1[i].xacnhan === 0) {
              this.getyeucau1[i].tinhtrang = "chưa x.nhận"
            }
            this.getyeucau1[i].status=""
          }
          return this.getyeucau1
        });
      });
  }
  DeleteGiaoviec(id:number){
    this.giaoviecService.Deletegiaoviec(id).subscribe(x=>{
      this.yeucauService.GetAllyeucau().subscribe(data => {
        this.yeucaufilm1 = data;
        this.getyeucau1 = this.yeucaufilm1.filter(data =>data.xacnhan === 1);
        for (let i = 0; i < this.getyeucau1.length; i++) {
          this.getloaiphim = this.loaiphim.filter(data => data.id === this.getyeucau1[i].loaiphimid)
          this.getsanpham = this.sanpham.filter(data => data.id === this.getloaiphim[0].sanphamid)
          this.getmay = this.may.filter(data => data.id === this.getyeucau1[i].mayid)
          this.getbophan = this.bophan.filter(data => data.Id === this.getyeucau1[i].bophanyeucauid)
          this.getgiaoviec=this.giaoviec.filter(data=>data.yeucauid===this.getyeucau1[i].id)
          this.getyeucau1[i].sanpham = this.getsanpham[0].tensanpham
          this.getyeucau1[i].loaiphim = this.getloaiphim[0].tenloaiphim
          this.getyeucau1[i].may = this.getmay[0].tenmay
          this.getyeucau1[i].bophan = this.getbophan[0].Name
          if (this.getyeucau1[i].loaiyeucau === 1) {
            this.getyeucau1[i].phanloai = "hàng mới"
          }
          if (this.getyeucau1[i].loaiyeucau === 2) {
            this.getyeucau1[i].phanloai = "làm lại"
          }
          if (this.getyeucau1[i].loaiyeucau === 3) {
            this.getyeucau1[i].phanloai = "thay đổi"
          }
          if (this.getyeucau1[i].xacnhan === 1) {
            this.getyeucau1[i].tinhtrang = "đã x.nhận"
          }
          if (this.getyeucau1[i].xacnhan === 0) {
            this.getyeucau1[i].tinhtrang = "chưa x.nhận"
          }
          this.getyeucau1[i].status=""
        }
        return this.getyeucau1
      });
    });
  }
}
