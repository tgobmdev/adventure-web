import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';

const LOGIN = { path: 'login', component: AccountLoginComponent };
const REGISTER = { path: 'register', component: AccountRegisterComponent };

const routes: Routes = [LOGIN, REGISTER];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
