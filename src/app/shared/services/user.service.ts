import { Injectable } from '@angular/core';
import{user} from 'src/app/shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public APIyeucau: string = 'http://localhost:35257';
  constructor(private http: HttpClient) { }

  registerUser(user: user,roles : string[]) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles : roles
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.APIyeucau + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
   
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.APIyeucau + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.APIyeucau+'/api/GetUserClaims');
  }

  getAllRoles() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.APIyeucau + '/api/GetAllRoles', { headers: reqHeader });
  }
  getAllRoleChucNang() {
    
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.APIyeucau);
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;

  }
}
