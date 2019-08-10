import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YeucauService } from 'src/app/shared/services/yeucau.service';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { sanpham } from 'src/app/shared/models/sanpham';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-may-dung',
  templateUrl: './may-dung.component.html',
  styleUrls: ['./may-dung.component.css']
})
export class MayDungComponent implements OnInit {
  // yeucaufilm: yeucaufilm[];
  // getyeucau:yeucaufilm[];
  // loaiphim:loaiphim[];
  // getloaiphim:loaiphim[];
  // sanpham:sanpham[];
  // getsanpham:sanpham[];
  tam:string;
  // formUser=new FormGroup({
  //     avatar:new FormControl()
  // })
  constructor(private yeucauService: YeucauService, private router: Router) { }

  ngOnInit() {

  }
  onFileChange(event) {
  
    if(event.target.files && event.target.files.length > 0) {
      console.log(event.target.value);
     
    }
  }
}
