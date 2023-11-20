import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPromiseService } from '../../../../shared/services/api-promise.service';
import { UserLoginRequest } from '../dto/request/user-login-request';
import { LoginEmitterService } from './login-emitter.service';

@Injectable({
  providedIn: 'root',
})
export class AccountLoginService extends ApiPromiseService {
  constructor(
    private router: Router,
    private readonly loginEmitterService: LoginEmitterService,
  ) {
    super();
  }

  loginUser = async (userLoginRequest: UserLoginRequest): Promise<void> => {
    if (userLoginRequest) {
      const users = await this.get(
        `users?username=${userLoginRequest.username}`,
      );
      const user = users.find(
        (user: any) =>
          user.username === userLoginRequest.username &&
          user.password === userLoginRequest.password,
      );
      if (!user) {
        throw new Error('Usuário ou senha invalidos!');
      }
      sessionStorage.setItem('user', JSON.stringify(user));
      this.loginEmitterService.setData(true);
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
