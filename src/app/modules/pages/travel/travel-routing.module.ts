import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './travel.component';

const TRAVELS_HOME = { path: '', component: TravelComponent };

const routes: Routes = [TRAVELS_HOME];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
