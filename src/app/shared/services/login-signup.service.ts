import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginSignupService {
  public login_url = 'http://localhost:5000';
  public reg_url = 'http://localhost:5000';

  constructor(private http: HttpClient, private apiService: ApiService) {}

  authLogin(username: string, password: string): Observable<any> {
 

    
    return this.apiService.get(
      `${this.login_url}/user?email=${username}&password=${password}`
    );
  }

  userRegister(userDTO: any): Observable<any> {
    return this.apiService.post(this.reg_url + '/user', userDTO);
  }

  adminLogin(username: string, password: string): Observable<any> {
    return this.apiService.get(
      `${this.login_url}/user?email=${username}&password=${password}&role=admin`
    );
  }
}
