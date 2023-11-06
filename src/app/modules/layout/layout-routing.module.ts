import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const DESTINATIONS = {
  path: 'destinations',
  loadChildren: () =>
    import('../pages/destination/destination.module').then(
      (m) => m.DestinationModule,
    ),
};

const routes: Routes = [DESTINATIONS];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
