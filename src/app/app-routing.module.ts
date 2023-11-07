import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './modules/pages/welcome/welcome.component';

const WELCOME = {
  path: 'welcome',
  component: WelcomeComponent,
};

const ACCOUNT = {
  path: 'account',
  loadChildren: () =>
    import('../app/modules/pages/account/account.module').then(
      (m) => m.AccountModule,
    ),
};

const DESTINATION = {
  path: 'destinations',
  loadChildren: () =>
    import('../app/modules/pages/destination/destination.module').then(
      (m) => m.DestinationModule,
    ),
};

const routes: Routes = [WELCOME, ACCOUNT, DESTINATION];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
