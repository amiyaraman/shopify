import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';
import { User } from '../../core/Model/object-model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public user_url: string = 'http://localhost:5000/user/';
  public product_url: string = 'http://localhost:5000/products/';
  public all_user_url: string = 'http://localhost:5000/user';

  constructor(private apiService: ApiService) {}

  userDashBoardData() {
    return this.apiService.get(this.user_url);
  }

  productDashBoardData() {
    return this.apiService.get(this.product_url);
  }

  allUser(): Observable<any> {
    return this.apiService.get(this.all_user_url);
  }

  addUser(user_dto: User) {
    return this.apiService.post(this.user_url, user_dto);
  }

  singleUser(user_id: any) {
    console.log(user_id);
    return this.apiService.get(this.user_url+user_id, user_id);
  }

  editUser(user_id: any, user_dto: User): Observable<any> {
    return this.apiService.put(this.user_url + user_id, user_dto);
  }

  deleteUser(user_id: any) {
    return this.apiService.delete(this.user_url + user_id);
  }
}
