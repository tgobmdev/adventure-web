import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../../../shared/shared.module';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    AccountLoginComponent,
    AccountRegisterComponent,
    AccountDetailComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    SharedModule,
    ToastModule,
    AccountRoutingModule,
  ],
})
export class AccountModule {}
