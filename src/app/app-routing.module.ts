import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/views/login/login.component';
import { YeucaufilmComponent } from 'src/app/components/yeucaufilm/list-yeucau/yeucaufilm.component';
import { YeucauComponent } from 'src/app/components/yeucaufilm/yeucau/yeucau.component';
import { EditYeucauComponent } from 'src/app/components/yeucaufilm/edit-yeucau/edit-yeucau.component';
import { AddYeucauComponent } from 'src/app/components/yeucaufilm/add-yeucau/add-yeucau.component';
import { SideMenu01Component } from 'src/app/shared/views/side-menu01/side-menu01.component';
import {AuthGuard} from './shared/services/auth.guard';
// import { AppComponent } from 'src/app/app.component';

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
        component: YeucauComponent,
        children: [
          {
            path: 'list',
            component: YeucaufilmComponent
          },
          {
            path: 'id/edit',
            component: EditYeucauComponent
          },
          {
            path: 'add',
            component: AddYeucauComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
