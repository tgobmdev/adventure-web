import { Injectable } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { ApiPromiseService } from '../../../../shared/services/api-promise.service';

@Injectable({
  providedIn: 'root',
})
export class AccountRegisterService extends ApiPromiseService {
  registerUser = async (user: User): Promise<void> => {
    try {
      const response = await this.post('users', user);
      localStorage.setItem('user', JSON.stringify(response));
    } catch (error) {
      throw error;
    }
  };
}
