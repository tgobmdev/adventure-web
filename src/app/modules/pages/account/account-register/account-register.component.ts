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
  formLogin!: FormGroup;
  user!: User;
  constructor(private readonly messageService: MessageService) {
    this.createLoginForm();
  }

  ngOnInit(): void {}

  createLoginForm = () => {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  };

  onRegister = async () => {
    if (this.formLogin.valid) {
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
}
