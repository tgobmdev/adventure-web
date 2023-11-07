import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const DESTINATION = {
  path: 'destinations',
  loadChildren: () =>
    import('../app/modules/pages/destination/destination.module').then(
      (m) => m.DestinationModule,
    ),
};

const ACCOUNT = {
  path: 'account',
  loadChildren: () =>
    import('../app/modules/pages/account/account.module').then(
      (m) => m.AccountModule,
    ),
};

const routes: Routes = [DESTINATION, ACCOUNT];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
