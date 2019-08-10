import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-side-menu01',
  templateUrl: './side-menu01.component.html',
  styleUrls: ['./side-menu01.component.css']
})
export class SideMenu01Component implements OnInit {
  constructor(private router: Router,) { }

  ngOnInit() {
  }
   logout()
   {
     if(localStorage.getItem('userRoles'))
     {
       localStorage.removeItem('userRoles');
       this.router.navigate(['login']);
     }

   }
  
}
