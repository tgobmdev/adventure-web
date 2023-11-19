import { Injectable } from '@angular/core';
import { UserRequest } from '../../../../shared/dto/request/user-request';
import { ApiPromiseService } from '../../../../shared/services/api-promise.service';
import { generateUniqueId } from '../../../../shared/utils/generate-unique-id';

@Injectable({
  providedIn: 'root',
})
export class AccountRegisterService extends ApiPromiseService {
  registerUser = async (user: UserRequest): Promise<void> => {
    try {
      user.id = generateUniqueId();
      const response = await this.post('users', user);
      localStorage.setItem('user', JSON.stringify(response));
    } catch (error) {
      throw error;
    }
  };
}
