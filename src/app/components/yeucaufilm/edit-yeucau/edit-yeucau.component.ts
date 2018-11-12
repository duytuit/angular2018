import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {YeucauService} from 'src/app/shared/services/yeucau.service';
import { yeucaufilm } from 'src/app/shared/models/yeucau';

@Component({
  selector: 'app-edit-yeucau',
  templateUrl: './edit-yeucau.component.html',
  styleUrls: ['./edit-yeucau.component.css']
})
export class EditYeucauComponent implements OnInit {
  @Input() yeucau:yeucaufilm;

  constructor(private yeucauService:YeucauService ,private route: ActivatedRoute) { }

  ngOnInit():void {
   this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.yeucauService.Getyeucau(id).subscribe(yeucau=>this.yeucau=yeucau);
  }
  Save(): void {
    this.yeucauService.Updateyeucau(this.yeucau).subscribe();
  }
}
