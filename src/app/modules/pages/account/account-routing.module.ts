import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';

const LOGIN = { path: 'login', component: AccountLoginComponent };
const REGISTER = { path: 'register', component: AccountRegisterComponent };
const DETAIL = { path: ':id', component: AccountDetailComponent };

const routes: Routes = [LOGIN, REGISTER, DETAIL];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
