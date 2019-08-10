import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {YeucauService} from 'src/app/shared/services/yeucau.service';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { may } from 'src/app/shared/models/may';
import { sanpham } from 'src/app/shared/models/sanpham';
import { bophan } from 'src/app/shared/models/bophan';

@Component({
  selector: 'app-edit-yeucau',
  templateUrl: './edit-yeucau.component.html',
  styleUrls: ['./edit-yeucau.component.css']
})
export class EditYeucauComponent implements OnInit {
  @Input() yeucau:yeucaufilm;
  showDropDownsanpham: boolean = false;
  showDropDownloaiphim: boolean = false;
  showDropDownmay: boolean = false;
  showDropDownbophan: boolean = false;
  ShowInput: boolean = true;
  Message: string = '';

  public idsanpham: number;
  public tensanpham: string;

  public idloaiphim: number;
  public tenloaiphim: string;

  public idmay: number;
  public tenmay: string;

  public idbophan: number;
  public tenbophan: string;

  soluong: number;
  phanloai:number;
  tylecodinh: number;
  tylex: number;
  tyley: number;
  idyeucau:number;

  yeucaufilm: yeucaufilm[];
  getyeucau: yeucaufilm[];
  loaiphim: loaiphim[];
  getloaiphim: loaiphim[];
  sanpham: sanpham[];
  getsanpham: sanpham[];
  may: may[];
  getmay: may[];
  bophan:bophan[];
  getbophan:bophan[];
  

  getsobo: any[];
  yeucau_filter: yeucaufilm[];
  loaiphim_filter: loaiphim[];
  addyeucau = new FormGroup(
    {
      id:new FormControl(),
      mayeucau: new FormControl(),
      tenyeucau: new FormControl(),
      loaiyeucau: new FormControl(),
      tilycodinh: new FormControl(),
      x: new FormControl('', Validators.compose([Validators.required])),
      y: new FormControl('', Validators.compose([Validators.required])),
      noidungchitiet: new FormControl('', Validators.compose([Validators.required])),
      ghichu: new FormControl('', Validators.compose([Validators.required])),
      tailieudinhkem: new FormControl(''),

      xacnhan: new FormControl(1),
      sobo: new FormControl('', Validators.compose([Validators.required])),
      thoigianyeucau: new FormControl(formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US')),
      loaiphimid: new FormControl(),
      mayid: new FormControl(),
      bophanyeucauid: new FormControl(),
      samphamid: new FormControl(),
      nguoiyeucauid: new FormControl(1),
      nguoixacnhanid: new FormControl(1),
      thoigianxacnhan: new FormControl(''),
    }
  );
  constructor(private yeucauService:YeucauService ,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.yeucauService.GetAllsanpham().subscribe(data => this.sanpham = data)
    this.yeucauService.GetAllloaiphim().subscribe(data => this.loaiphim = data)
    this.yeucauService.GetAllmay().subscribe(data => this.may = data)
    this.yeucauService.GetAllbophan().subscribe(data => this.bophan = data)
   this.getHero();
  }
  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idyeucau=id;
    this.yeucauService.Getyeucau(id).subscribe(data=>this.yeucau=data);
    this.yeucauService.GetAllyeucau().subscribe(data=>{
    this.yeucaufilm=data.filter(data=>data.id===id)
    this.getyeucau=this.yeucaufilm
    this.getloaiphim=this.loaiphim.filter(data=>data.id===this.getyeucau[0].loaiphimid)
    this.getsanpham=this.sanpham.filter(data=>data.id===this.getloaiphim[0].sanphamid)
    this.getmay=this.may.filter(data=>data.id===this.getyeucau[0].mayid)
    this.getbophan=this.bophan.filter(data=>data.Id===this.getyeucau[0].bophanyeucauid)
    this.tensanpham=this.getsanpham[0].tensanpham
    this.tenloaiphim=this.getloaiphim[0].tenloaiphim
    this.tenmay=this.getmay[0].tenmay
    this.tenbophan=this.getbophan[0].Name
    this.idbophan=this.getyeucau[0].bophanyeucauid
    this.idloaiphim=this.getyeucau[0].loaiphimid
    this.idmay=this.getyeucau[0].mayid
    this.idsanpham=this.getloaiphim[0].sanphamid
    this.tylecodinh=this.getyeucau[0].tilycodinh
    this.soluong=this.getyeucau[0].sobo
    this.phanloai=this.getyeucau[0].loaiyeucau
    this.tylex=this.getyeucau[0].x
    this.tyley=this.getyeucau[0].y
    })
  }
  onEdityeucau(): void {
    let xMin = []
    let xMax = []
    let yMin = []
    let yMax = []
    let MinX: number;
    let MaxX: number;
    let MinY: number;
    let MaxY: number;
    this.loaiphim_filter = this.getloaiphim.filter(x => x.sanphamid === this.idsanpham && x.id === this.idloaiphim)
    if (this.tenloaiphim === "Phủ Sơn") {
      if (this.loaiphim_filter.length === 1) {
        xMin.push(this.loaiphim_filter[0]['x_min'])
        xMax.push(this.loaiphim_filter[0]['x_max'])
        yMin.push(this.loaiphim_filter[0]['y_min'])
        yMax.push(this.loaiphim_filter[0]['y_max'])
        MinX = Math.max.apply(null, xMin)
        MaxX = Math.max.apply(null, xMax)
        MinY = Math.max.apply(null, yMin)
        MaxY = Math.max.apply(null, yMax)
        if ((this.tylex >= MinX) && (this.tylex <= MaxX)) {
          if ((this.tyley >= MinY) && (this.tyley <= MaxY)) {
            this.Message = '';
            this.addyeucau.controls['tenyeucau'].reset('Yêu cầu mới');
            this.addyeucau.controls['xacnhan'].reset(1);
            this.addyeucau.controls['thoigianxacnhan'].reset(formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US'));
            this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
              this.yeucauService.GetAllyeucau()
            });
            this.router.navigate(['/home/yeucau/list']);
          } else {
            this.Message = '';
            this.addyeucau.controls['tenyeucau'].reset('YC bất thường');
            this.addyeucau.controls['xacnhan'].reset(0);
            this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
              this.yeucauService.GetAllyeucau()
            });
            this.router.navigate(['/home/yeucau/list']);
          }
        } else {
          this.Message = '';
          this.addyeucau.controls['tenyeucau'].reset('YC bất thường');
          this.addyeucau.controls['xacnhan'].reset(0);
          this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
            this.yeucauService.GetAllyeucau()
          });
          this.router.navigate(['/home/yeucau/list']);
        }
      } else {
        this.Message = '';
        this.addyeucau.controls['tenyeucau'].reset('Yêu cầu mới');
        this.addyeucau.controls['xacnhan'].reset(1);
        this.addyeucau.controls['thoigianxacnhan'].reset(formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US'));
        this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
          this.yeucauService.GetAllyeucau()
        });
        this.router.navigate(['/home/yeucau/list']);
      }
    } else {
      if (this.loaiphim_filter.length === 1) {
        this.loaiphim_filter = this.getloaiphim.filter(x => x.sanphamid === this.idsanpham && x.id === this.idloaiphim)
        let x = [];
        let y = [];
        let x1: number;
        let y1: number;
        x.push(this.loaiphim_filter[0]['x_min']);
        x1 = Math.max.apply(null, x);
        y.push(this.loaiphim_filter[0]['y_min']);
        y1 = Math.max.apply(null, y);
        if ((parseFloat(this.tylex.toString()) === x1) && (parseFloat(this.tyley.toString()) === y1)) {
          this.Message = '';
          this.addyeucau.controls['tenyeucau'].reset('Yêu cầu mới');
          this.addyeucau.controls['xacnhan'].reset(1);
          this.addyeucau.controls['thoigianxacnhan'].reset(formatDate(Date.now(), 'yyyy-MM-dd HH:mm', 'en-US'));
          this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
            this.yeucauService.GetAllyeucau()
          });
          this.router.navigate(['/home/yeucau/list']);
        } else {
          //=======không co ty le co dinh========>bất thường
          this.Message = '';
          this.addyeucau.controls['tenyeucau'].reset('YC bất thường');
          this.addyeucau.controls['xacnhan'].reset(0);
          this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
            this.yeucauService.GetAllyeucau()
          });
          this.router.navigate(['/home/yeucau/list']);
        }
      } else {
        //=======không co ty le co dinh========>bất thường
        this.Message = 'Bất thường';
        this.Message = '';
        this.addyeucau.controls['tenyeucau'].reset('YC bất thường');
        this.addyeucau.controls['xacnhan'].reset(0);
        this.yeucauService.Updateyeucau(this.addyeucau.value).subscribe(a => {
          this.yeucauService.GetAllyeucau()
        });
        this.router.navigate(['/home/yeucau/list']);
      }
    }
  }
   //sanpham
   selectValuesanpham(value: sanpham) {
    this.idsanpham = value.id;
    this.tensanpham = value.tensanpham;
  }
  closeDropDownsanpham() {
    this.showDropDownsanpham = !this.showDropDownsanpham;
  }
  openDropDownsanpham() {
    this.showDropDownsanpham = !this.showDropDownsanpham;
    this.showDropDownloaiphim = false;
    this.showDropDownmay = false;
  }
  //loaiphim
  selectValueloaiphim(value: loaiphim) {

    this.idloaiphim = value.id;
    this.tenloaiphim = value.tenloaiphim;
  }
  closeDropDownloaiphim() {
    this.showDropDownloaiphim = !this.showDropDownloaiphim;
  }
  openDropDownloaiphim() {
    this.loaiphim_filter = this.getloaiphim.filter(x => x.sanphamid === this.idsanpham)
    this.showDropDownloaiphim = !this.showDropDownloaiphim;
    this.showDropDownsanpham = false;
    this.showDropDownmay = false;
  }
  //may
  selectValuemay(value: may) {
    this.idmay = value.id;
    this.tenmay = value.tenmay;
  }
  closeDropDownmay() {
    this.showDropDownmay = !this.showDropDownmay;
  }
  openDropDownmay() {
    this.showDropDownmay = !this.showDropDownmay;
    this.showDropDownloaiphim = false;
    this.showDropDownsanpham = false;
  }
  selectValuebophan(value: bophan) {
    this.idbophan = value.Id;
    this.tenbophan = value.Name;
  }
  closeDropDownbophan() {
    this.showDropDownbophan=!this.showDropDownbophan
  }
  openDropDownbophan() {
    this.showDropDownbophan=!this.showDropDownbophan
    this.showDropDownmay = false;
    this.showDropDownloaiphim = false;
    this.showDropDownsanpham = false;
  }
  onEvent(id: number): void {
    this.soluong = id;
  }

  onTyLe(tyle: number): void {
    debugger
    if (this.tenloaiphim != "Phủ Sơn") {
      this.tylecodinh = tyle;
      this.loaiphim_filter = this.getloaiphim.filter(x => x.sanphamid === this.idsanpham && x.id === this.idloaiphim)
      let x = [];
      let y = [];
      let x1: number;
      let y1: number;
      x.push(this.loaiphim_filter[0]['x_min']);
      x1 = Math.max.apply(null, x);
      y.push(this.loaiphim_filter[0]['y_min']);
      y1 = Math.max.apply(null, y);
      if (this.tylecodinh != 0) {
        if (x1 != null && y1 != null) {
          this.tylex = x1;
          this.tyley = y1;
        }
      } else {
        //==kiểm tra tỷ lệ input có rỗng không
      }
    }
  }
  onPhanloai(phanloai:number):void{
    this.phanloai=phanloai;
 }
}
