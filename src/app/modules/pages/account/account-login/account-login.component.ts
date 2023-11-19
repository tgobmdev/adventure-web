import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserLoginRequest } from '../../../../shared/dto/request/user-login-request';
import { AccountLoginService } from '../service/account-login.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
})
export class AccountLoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  userLoginRequest!: UserLoginRequest;

  constructor(
    private readonly messageService: MessageService,
    private readonly accountLoginService: AccountLoginService,
  ) {
    this.createUserLoginForm();
  }

  ngOnInit(): void {}

  redirectToRegister = () => {
    this.accountLoginService.redirectToRegister();
  };

  createUserLoginForm = () => {
    this.userLoginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  };

  createUserLoginRequest = () => {
    return new UserLoginRequest({
      username: this.userLoginForm.get('username')?.value,
      password: this.userLoginForm.get('password')?.value,
    });
  };

  disableButtonForm = () => {
    return this.userLoginForm.invalid ? true : false;
  };

  onLogin = () => {
    if (this.userLoginForm.valid) {
      this.userLoginRequest = this.createUserLoginRequest();
      this.accountLoginService.loginUser(this.userLoginRequest).then(
        (_response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Logado com Sucesso!',
          });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        },
      );
    }
  };
}
