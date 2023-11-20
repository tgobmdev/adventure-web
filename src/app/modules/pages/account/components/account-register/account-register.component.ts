import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomMessageService } from '../../../../../shared/services/message.service';
import { UserRequest } from '../../dto/request/user-request';
import { AccountRegisterService } from '../../services/account-register.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
})
export class AccountRegisterComponent {
  formRegister!: FormGroup;
  userRequest!: UserRequest;
  buttonDisabled: boolean = false;

  constructor(
    private readonly messageService: CustomMessageService,
    private readonly accountRegisterService: AccountRegisterService,
  ) {
    this.createRegisterForm();
  }

  createRegisterForm = () => {
    this.formRegister = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  };

  disableButtonForm = () => {
    return this.formRegister.invalid ? true : false;
  };

  createUserRequest = () => {
    return new UserRequest({
      username: this.formRegister.get('username')?.value,
      password: this.formRegister.get('password')?.value,
      name: this.formRegister.get('name')?.value,
      email: this.formRegister.get('email')?.value,
    });
  };

  checkPasswordMatch = (): boolean => {
    const password = this.formRegister.get('password')?.value;
    const confirmPassword = this.formRegister.get('confirmPassword')?.value;
    return password !== confirmPassword ? true : false;
  };

  onRegister = () => {
    if (this.formRegister.valid) {
      if (this.checkPasswordMatch()) {
        this.messageService.sendError('As senhas não coincidem.');
        return;
      }
      this.userRequest = this.createUserRequest();
      this.accountRegisterService.registerUser(this.userRequest).then(
        (_response) => {
          this.messageService.sendSucess('Registrado com Sucesso!');
        },
        (error) => {
          this.messageService.sendError(error);
        },
      );
    }
  };
}
