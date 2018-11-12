import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {YeucauService} from 'src/app/shared/services/yeucau.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-yeucau',
  templateUrl: './add-yeucau.component.html',
  styleUrls: ['./add-yeucau.component.css']
})
export class AddYeucauComponent implements OnInit {
   addyeucau = new FormGroup(
     {
           ca:new FormControl('Ngày'),
           ngay: new FormControl('17/11/2018'),
           gio: new FormControl('9:30'),
           bophan:new FormControl('MA3_2F'),
           masanpham: new FormControl(''),
           phanloai: new FormControl(''),
           loaiphim:new FormControl(''),
           maydung: new FormControl(''),
           sobo: new FormControl(1),
           tylex: new FormControl(''),
           tyley: new FormControl(''),
           nguoiyeucau: new FormControl(''),
           noidungyeucau:new FormControl(''),
           xacnhanpe: new FormControl(''),
           xacnhancam : new FormControl(''),
           mayin: new FormControl('361'),
           hientrang: new FormControl('Test'),
           giohoanthanh: new FormControl(''),
           ngayxuatxuong:new FormControl(''),
           ngaybaophe: new FormControl(''),
           noidungbaophe:new FormControl(''),
     }
   );
  constructor(public yeucauService:YeucauService,private router: Router) { }

  ngOnInit() {
    }
  onAddyeucau(addyeucau):void{
    this.yeucauService.Addyeucau(addyeucau).subscribe();
    this.router.navigate(['home/yeucau/list']);
  }
}
