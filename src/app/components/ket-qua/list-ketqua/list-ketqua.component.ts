import { Component, OnInit } from '@angular/core';
import { YeucauService } from 'src/app/shared/services/yeucau.service';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/shared/services/ExportToExcel/excel.service';

@Component({
  selector: 'app-list-ketqua',
  templateUrl: './list-ketqua.component.html',
  styleUrls: ['./list-ketqua.component.css']
})
export class ListKetquaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
