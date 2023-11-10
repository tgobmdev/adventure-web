import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private readonly messageService: MessageService) {
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
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Logado com Sucesso!',
    });
  };
}