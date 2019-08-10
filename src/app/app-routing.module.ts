import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/views/login/login.component';
import { YeucaufilmComponent } from 'src/app/components/yeucaufilm/list-yeucau/yeucaufilm.component';
import { YeucauComponent } from 'src/app/components/yeucaufilm/yeucau/yeucau.component';
import { EditYeucauComponent } from 'src/app/components/yeucaufilm/edit-yeucau/edit-yeucau.component';
import { AddYeucauComponent } from 'src/app/components/yeucaufilm/add-yeucau/add-yeucau.component';
import { SideMenu01Component } from 'src/app/shared/views/side-menu01/side-menu01.component';
import {AuthGuard} from './shared/services/auth.guard';
import { GiaoViecComponent } from './components/giao-viec/giao-viec.component';
import { EditGiaoviecComponent } from './components/giao-viec/edit-giaoviec/edit-giaoviec.component';
import { AddGiaoviecComponent } from './components/giao-viec/add-giaoviec/add-giaoviec.component';
import { KetQuaComponent } from './components/ket-qua/ket-qua.component';
import { ListKetquaComponent } from './components/ket-qua/list-ketqua/list-ketqua.component';
import { EditKetquaComponent } from './components/ket-qua/edit-ketqua/edit-ketqua.component';
import { AddKetquaComponent } from './components/ket-qua/add-ketqua/add-ketqua.component';
import { XacNhanComponent } from './components/xac-nhan/xac-nhan.component';
import { EditXacnhanComponent } from './components/xac-nhan/edit-xacnhan/edit-xacnhan.component';
import { ListXacnhanComponent } from './components/xac-nhan/list-xacnhan/list-xacnhan.component';
import { MayDungComponent } from './components/may-dung/may-dung.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: SideMenu01Component,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'yeucau',
        component:YeucauComponent,
        children: [
          {
            path: 'list',
            component: YeucaufilmComponent
          },
          {
            path: 'edit/:id',
            component: EditYeucauComponent
          },
          {
            path: 'add',
            component: AddYeucauComponent
          }
        ]
      },
      {
        path:'giaoviec',
        component:GiaoViecComponent
      },
      {
        path:'ketqua',
        component:KetQuaComponent
      },
      {
        path:'xacnhan',
        component:XacNhanComponent
      },
      {
        path:'hienthi',
        component:MayDungComponent,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
