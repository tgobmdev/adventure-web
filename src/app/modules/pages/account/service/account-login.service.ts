import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPromiseService } from '../../../../shared/services/api-promise.service';
import { UserLoginRequest } from '../../../../shared/dto/request/user-login-request';

@Injectable({
  providedIn: 'root',
})
export class AccountLoginService extends ApiPromiseService {
  constructor(private router: Router) {
    super();
  }

  loginUser = async (userLoginRequest: UserLoginRequest): Promise<void> => {
    if (userLoginRequest) {
      const user = await this.get(
        `users?username=${userLoginRequest.username}`,
      );
      if (!user) {
        throw new Error('Usuário não encontrado!');
      }
    }
    this.redirectToWelcomePage();
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
