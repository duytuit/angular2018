import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { sanpham } from 'src/app/shared/models/sanpham';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { Observable } from 'rxjs';
import { may } from '../models/may';
import { bophan } from '../models/bophan';
import { giaoviec } from '../models/giaoviec';

@Injectable({
  providedIn: 'root'
})
export class YeucauService {
  public API: string = "http://192.84.100.207/camapi/api/yeucaus";

  public APIsanpham: string = "http://192.84.100.207/camapi/api/sanphams";

  public APIloaiphim: string = "http://192.84.100.207/camapi/api/loaiphims";

  public APImay: string = "http://192.84.100.207/camapi/api/mays";

  public APIbophan:string="http://192.84.100.207/salaryAPI/api/stage";

  public APIgiaoviec: string = "http://192.84.100.207/camapi/api/giaoviecs";

  constructor(public http: HttpClient) { }

  GetAllgiaoviec12():Observable<giaoviec[]>{
    return this.http.get<giaoviec[]>(this.APIgiaoviec);
  }
  
  GetAllbophan(): Observable<bophan[]> {
    return this.http.get<bophan[]>(this.APIbophan);
  }
  GetAllmay(): Observable<may[]> {
    return this.http.get<may[]>(this.APImay);
  }
  GetAllloaiphim(): Observable<loaiphim[]> {
    return this.http.get<loaiphim[]>(this.APIloaiphim);
  }
  GetAllsanpham(): Observable<sanpham[]> {
    return this.http.get<sanpham[]>(this.APIsanpham);
  }
  GetsanphambyID(id: number): Observable<sanpham> {
    const url = `${this.APIsanpham}/${id}`;
    return this.http.get<sanpham>(url);
  }
  GetloaiphimbyID(id: number): Observable<loaiphim> {
    const url = `${this.APIloaiphim}/${id}`;
    return this.http.get<loaiphim>(url);
  }
  GetAllyeucau(): Observable<yeucaufilm[]> {
    return this.http.get<yeucaufilm[]>(this.API);
  }
  Addyeucau(yeucau: yeucaufilm): Observable<yeucaufilm> {
    return this.http.post<yeucaufilm>(this.API, yeucau);
  }
  Updateyeucau(yeucau: yeucaufilm): Observable<yeucaufilm[]> {
    return this.http.put<yeucaufilm[]>(`${this.API}/${yeucau.id}`, yeucau);
  }
  Getyeucau(id: number): Observable<yeucaufilm> {
    const url = `${this.API}/${id}`;
    return this.http.get<yeucaufilm>(url);
  }
  Deleteyeucau(id: number): Observable<{}> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }
}
