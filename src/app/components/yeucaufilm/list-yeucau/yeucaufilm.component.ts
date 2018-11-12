import { Component, OnInit,OnDestroy} from '@angular/core';
//import { yeucaufilm } from 'src/app/shared/models/yeucau';
import {YeucauService} from 'src/app/shared/services/yeucau.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-yeucaufilm',
  templateUrl: './yeucaufilm.component.html',
  styleUrls: ['./yeucaufilm.component.css']
  
})
export class YeucaufilmComponent implements OnInit {

  
  public yeucaufilm=[];

     filterid: number;
     filterca : string;
     filterngay : string;
     filtergio: string;
     filterbophan: string;
     filtermasanpham: string;
     filterphanloai: string;
     filterloaiphim: string;
     filtermaydung: string;
     filtersobo: number;
     filtertylex: string;
     filtertyley: string;
     filternguoiyeucau: string;
     filternoidungyeucau: string;
     filterxacnhanpe: string; 
     filterxacnhancam : string;
     filtermayin: string; 
     filterhientrang: string;
     filtergiohoanthanh: string;
     filterngayxuatxuong: string; 
     filterngaybaophe: string; 
     filternoidungbaophe: string;


  constructor(public yeucauService:YeucauService,private router: Router) {
   }

  ngOnInit() {
   this.yeucauService.GetAllyeucau().subscribe(data=>this.yeucaufilm=data);
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
