import { Component, OnInit } from '@angular/core';
import {yeucaufilm} from 'src/app/shared/models/yeucau';
import {FormGroup,FormControl} from '@angular/forms';
import {YeucauService} from 'src/app/shared/services/yeucau.service';

@Component({
  selector: 'app-add-yeucau',
  templateUrl: './add-yeucau.component.html',
  styleUrls: ['./add-yeucau.component.css']
})
export class AddYeucauComponent implements OnInit {
   addyeucau = new FormGroup(
     {
           masanpham: new FormControl(''),
           phanloai: new FormControl(''),
           loaiphim:new FormControl(''),
           maydung: new FormControl(''),
           tylex: new FormControl(''),
           tyley: new FormControl(''),
           nguoiyeucau: new FormControl(''),
           noidungyeucau:new FormControl('')


     }
   );
  constructor( public yeucauService:YeucauService) { }

  ngOnInit() {

    }
  onAddyeucau(){
   // this.yeucauService.Addyeucau(this.addyeucau).subscribe(data=>this.addyeucau);
  }
}
