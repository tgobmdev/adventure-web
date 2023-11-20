import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPromiseService } from '../../../../shared/services/api-promise.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { UserLoginRequest } from '../dto/request/user-login-request';

@Injectable({
  providedIn: 'root',
})
export class AccountLoginService extends ApiPromiseService {
  constructor(
    private router: Router,
    private readonly authService: AuthService,
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
      this.authService.isLogged(JSON.stringify(user.id));
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
