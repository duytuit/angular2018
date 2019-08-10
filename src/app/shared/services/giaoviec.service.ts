import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { sanpham } from 'src/app/shared/models/sanpham';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { Observable } from 'rxjs';
import { may } from '../models/may';
import { giaoviec } from '../models/giaoviec';
import { bophan } from '../models/bophan';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GiaoviecService {
  public APIyeucau: string = "http://192.84.100.207/camapi/api/yeucaus";

  public APIsanpham: string = "http://192.84.100.207/camapi/api/sanphams";

  public APIgiaoviec: string = "http://192.84.100.207/camapi/api/giaoviecs";

  public APIloaiphim: string = "http://192.84.100.207/camapi/api/loaiphims";

  public APImay: string = "http://192.84.100.207/camapi/api/mays";

  public APIbophan:string="http://192.84.100.207/salaryAPI/api/stage";

  public APIuser:string="http://localhost:3000/user";

  GetAlluser(): Observable<user[]> {
    return this.http.get<user[]>(this.APIuser);
  }

  GetAllbophan(): Observable<bophan[]> {
    return this.http.get<bophan[]>(this.APIbophan);
  }

  constructor(public http: HttpClient) { }

  GetAllyeucau(): Observable<yeucaufilm[]> {
    return this.http.get<yeucaufilm[]>(this.APIyeucau);
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
  GetAllgiaoviec12():Observable<giaoviec[]>{
    return this.http.get<giaoviec[]>(this.APIgiaoviec);
  }
  Addgiaoviec(addgiaoviec: giaoviec): Observable<yeucaufilm> {
    return this.http.post<yeucaufilm>(this.APIgiaoviec, addgiaoviec);
  }
  Updategiaoviec(edityeucau: giaoviec): Observable<giaoviec[]> {
    return this.http.put<giaoviec[]>(`${this.APIgiaoviec}/${edityeucau.id}`, edityeucau);
  }
  Deletegiaoviec(id: number): Observable<{}> {
    const url = `${this.APIgiaoviec}/${id}`;
    return this.http.delete(url);
  }
  GetgiaoviecbyID(id: number): Observable<giaoviec> {
    const url = `${this.APIgiaoviec}/${id}`;
    return this.http.get<giaoviec>(url);
  }
}
