import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';

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
    ButtonModule,
    ReactiveFormsModule,
    SharedModule,
    ToastModule,
    AccountRoutingModule,
  ],
})
export class AccountModule {}
