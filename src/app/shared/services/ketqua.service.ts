import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { yeucaufilm } from 'src/app/shared/models/yeucau';
import { sanpham } from 'src/app/shared/models/sanpham';
import { loaiphim } from 'src/app/shared/models/loaiphim';
import { Observable } from 'rxjs';
import { may } from '../models/may';
import { giaoviec } from '../models/giaoviec';
import { ketqua } from '../models/ketqua';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class KetquaService {
  public APIyeucau: string = "http://192.84.100.207/camapi/api/yeucaus";

  public APIsanpham: string = "http://192.84.100.207/camapi/api/sanphams";

  public APIgiaoviec: string = "http://192.84.100.207/camapi/api/giaoviecs";

  public APIloaiphim: string = "http://192.84.100.207/camapi/api/loaiphims";

  public APImay: string = "http://192.84.100.207/camapi/api/mays";

  public APIketqua: string = "http://192.84.100.207/camapi/api/ketquas";

  public APIuser:string="http://localhost:3000/user";

  GetAlluser(): Observable<user[]> {
    return this.http.get<user[]>(this.APIuser);
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
  GetAllgiaoviec():Observable<giaoviec[]>{
    return this.http.get<giaoviec[]>(this.APIgiaoviec);
  }
  GetAllketqua():Observable<ketqua[]>{
    return this.http.get<ketqua[]>(this.APIketqua);
  }
  Addketqua(addketqua: ketqua): Observable<ketqua> {
    return this.http.post<ketqua>(this.APIketqua, addketqua);
  }
  Updateketqua(editketqua: ketqua): Observable<ketqua[]> {
    return this.http.put<ketqua[]>(`${this.APIketqua}/${editketqua.id}`, editketqua);
  }
  Deleteketqua(id: number): Observable<{}> {
    const url = `${this.APIketqua}/${id}`;
    return this.http.delete(url);
  }
}
