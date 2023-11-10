import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
})
export class AccountRegisterComponent {
  formRegister!: FormGroup;
  user!: User;
  buttonDisabled: boolean = false;

  constructor(private readonly messageService: MessageService) {
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

  createUser = () => {
    this.user = {
      id: this.generateUniqueId(),
      username: this.formRegister.get('username')?.value,
      password: this.formRegister.get('password')?.value,
      name: this.formRegister.get('name')?.value,
      email: this.formRegister.get('email')?.value,
    };
  };

  onRegister = () => {
    if (this.formRegister.valid) {
      if (this.checkPasswordMatch()) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'As senhas não coincidem.',
        });
        return;
      }
      this.createUser();
      localStorage.setItem('user', JSON.stringify(this.user));

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Registrado com Sucesso!',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Erro',
      });
    }
  };

  checkPasswordMatch = (): boolean => {
    const password = this.formRegister.get('password')?.value;
    const confirmPassword = this.formRegister.get('confirmPassword')?.value;
    return password !== confirmPassword ? true : false;
  };

  generateUniqueId = () => {
    return (
      new Date().getTime().toString(16) +
      Math.floor(Math.random() * 1000).toString(16)
    );
  };
}
