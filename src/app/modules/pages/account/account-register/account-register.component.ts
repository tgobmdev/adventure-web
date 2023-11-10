import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
})
export class AccountRegisterComponent implements OnChanges {
  formLogin!: FormGroup;
  user!: User;
  buttonDisabled: boolean = false;

  constructor(private readonly messageService: MessageService) {
    this.createRegisterForm();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  createRegisterForm = () => {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  };

  disableButtonForm = () => {
    return this.formLogin.invalid ? true : false;
  };

  onRegister = () => {
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
