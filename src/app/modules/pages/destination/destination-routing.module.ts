import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination.component';

const DESTINATIONS_HOME = { path: '', component: DestinationComponent };

const routes: Routes = [DESTINATIONS_HOME];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
