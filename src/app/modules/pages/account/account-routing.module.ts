import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const LOGIN = { path: 'login', component: LoginComponent };
const REGISTER = { path: 'register', component: RegisterComponent };

const routes: Routes = [LOGIN, REGISTER];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
