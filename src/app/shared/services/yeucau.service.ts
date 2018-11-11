import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {yeucaufilm} from 'src/app/shared/models/yeucau';

@Injectable({
  providedIn: 'root'
})
export class YeucauService {
  public API:string="http://localhost:3000/yeucau";
  constructor(public http: HttpClient) { }
  GetAllyeucau(){
    return this.http.get<yeucaufilm[]>(this.API);
  }
  Addyeucau(yeucau:yeucaufilm)
  {
      return this.http.post(this.API,yeucau);
  }
}
