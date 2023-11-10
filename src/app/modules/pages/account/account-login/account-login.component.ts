import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
})
export class AccountLoginComponent implements OnInit {
  formLogin!: FormGroup;
  user!: User;
  constructor(
    private readonly messageService: MessageService,
    private readonly router: Router,
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {}

  createLoginForm = () => {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  };

  onLogin = async () => {
    if (this.formLogin.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Logado com Sucesso!',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Erro',
      });
    }
  };

  redirectToRegister = async () => {
    this.router.navigate(['account/register']);
  };
}
