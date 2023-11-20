import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationListComponent } from './components/destination-list/destination-list.component';

const DESTINATIONS_LIST = { path: '', component: DestinationListComponent };

const routes: Routes = [DESTINATIONS_LIST];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
