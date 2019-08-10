import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/views/login/login.component';
import { SideMenu01Component } from './shared/views/side-menu01/side-menu01.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from "@angular/http";
import { LoaiPhimComponent } from './components/loai-phim/loai-phim.component';
import { YeucaufilmComponent } from './components/yeucaufilm/list-yeucau/yeucaufilm.component';
import { FilterPipe03Pipe } from './shared/pipes/yeucau/filter-pipe03.pipe';
import { MayDungComponent } from './components/may-dung/may-dung.component';
import { CamFilmComponent } from './components/cam-film/cam-film.component';

import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//service

import {YeucauService} from './shared/services/yeucau.service';
import {AuthGuard} from './shared/services/auth.guard';
import { EditYeucauComponent } from './components/yeucaufilm/edit-yeucau/edit-yeucau.component';
import { AddYeucauComponent } from './components/yeucaufilm/add-yeucau/add-yeucau.component';
import { YeucauComponent } from './components/yeucaufilm/yeucau/yeucau.component';
import { FiltersanphamPipe } from './shared/pipes/filtersanpham.pipe';
import { FiltermayPipe } from './shared/pipes/filtermay.pipe';
import { FilterloaiphimPipe } from './shared/pipes/filterloaiphim.pipe';
import { ExcelService } from './shared/services/ExportToExcel/excel.service';
import { GiaoViecComponent } from './components/giao-viec/giao-viec.component';
import { KetQuaComponent } from './components/ket-qua/ket-qua.component';
import { AddGiaoviecComponent } from './components/giao-viec/add-giaoviec/add-giaoviec.component';
import { EditGiaoviecComponent } from './components/giao-viec/edit-giaoviec/edit-giaoviec.component';
import { ListKetquaComponent } from './components/ket-qua/list-ketqua/list-ketqua.component';
import { AddKetquaComponent } from './components/ket-qua/add-ketqua/add-ketqua.component';
import { EditKetquaComponent } from './components/ket-qua/edit-ketqua/edit-ketqua.component';
import { XacNhanComponent } from './components/xac-nhan/xac-nhan.component';
import { ListXacnhanComponent } from './components/xac-nhan/list-xacnhan/list-xacnhan.component';
import { EditXacnhanComponent } from './components/xac-nhan/edit-xacnhan/edit-xacnhan.component';
import { DetailGiaoviecComponent } from './components/giao-viec/detail-giaoviec/detail-giaoviec.component';
import { KetquaService } from './shared/services/ketqua.service';
import { GiaoviecService } from './shared/services/giaoviec.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenu01Component,
    LoaiPhimComponent,
    YeucaufilmComponent,
    FilterPipe03Pipe,
    MayDungComponent,
    CamFilmComponent,
    EditYeucauComponent,
    AddYeucauComponent,
    YeucauComponent,
    FiltersanphamPipe,
    FiltermayPipe,
    FilterloaiphimPipe,
    GiaoViecComponent,
    KetQuaComponent,
    AddGiaoviecComponent,
    EditGiaoviecComponent,
    ListKetquaComponent,
    AddKetquaComponent,
    EditKetquaComponent,
    XacNhanComponent,
    ListXacnhanComponent,
    EditXacnhanComponent,
    DetailGiaoviecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [
    YeucauService,
    AuthGuard,
    ExcelService,
    KetquaService,
    GiaoviecService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
