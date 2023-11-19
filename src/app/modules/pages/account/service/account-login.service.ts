import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginRequest } from '../../../../shared/dto/request/user-login-request';
import { ApiPromiseService } from '../../../../shared/services/api-promise.service';

@Injectable({
  providedIn: 'root',
})
export class AccountLoginService extends ApiPromiseService {
  constructor(private router: Router) {
    super();
  }

  loginUser = async (userLoginRequest: UserLoginRequest): Promise<void> => {
    if (userLoginRequest) {
      const users = await this.get(
        `users?username=${userLoginRequest.username}`,
      );
      const user = users.find(
        (user: any) => user.username === userLoginRequest.username,
      );
      if (!user) {
        throw new Error('Usuário não encontrado!');
      }
    }
  };

  redirectToPage = (route: string) => {
    this.router.navigate([route]);
  };

  redirectToWelcomePage = () => {
    this.redirectToPage('welcome');
  };

  redirectToRegister = async () => {
    this.router.navigate(['account/register']);
  };
}
