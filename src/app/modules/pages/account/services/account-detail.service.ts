import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../shared/services/api.service';
import { UserResponse } from '../dto/response/user-response';

@Injectable({
  providedIn: 'root',
})
export class AccountDetailService extends ApiService {
  getUserById = (id: string): Observable<UserResponse> => {
    return this.get(`users?id=${id}`);
  };
}
