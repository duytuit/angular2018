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

//service

import {YeucauService} from './shared/services/yeucau.service';
import {AuthGuard} from './shared/services/auth.guard';
import { EditYeucauComponent } from './components/yeucaufilm/edit-yeucau/edit-yeucau.component';
import { AddYeucauComponent } from './components/yeucaufilm/add-yeucau/add-yeucau.component';
import { YeucauComponent } from './components/yeucaufilm/yeucau/yeucau.component';


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
    YeucauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    YeucauService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
