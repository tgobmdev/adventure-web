import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelListComponent } from './travel-list/travel-list.component';

const TRAVELS_LIST = { path: '', component: TravelListComponent };

const routes: Routes = [TRAVELS_LIST];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
