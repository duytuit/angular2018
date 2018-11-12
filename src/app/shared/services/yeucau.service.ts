import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YeucauService {
  public API: string = "http://localhost:3000/yeucau";
  constructor(public http: HttpClient) { }
  GetAllyeucau(): Observable<yeucaufilm[]> {
    return this.http.get<yeucaufilm[]>(this.API);
  }
  Addyeucau(yeucau: yeucaufilm):Observable<yeucaufilm> {
    return this.http.post<yeucaufilm>(this.API, yeucau);
  }
  Updateyeucau(yeucau:yeucaufilm):Observable<yeucaufilm>{
    return this.http.put<yeucaufilm>(this.API,yeucau);
  }
  Getyeucau(id:number):Observable<yeucaufilm>{
    const url = `${this.API}/${id}`;
    return this.http.get<yeucaufilm>(url);
  }
}
