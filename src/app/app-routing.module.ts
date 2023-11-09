import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const WELCOME = {
  path: 'welcome',
  loadChildren: () =>
    import('../app/modules/pages/welcome/welcome.module').then(
      (m) => m.WelcomeModule,
    ),
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
