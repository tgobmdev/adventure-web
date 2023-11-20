import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../../shared/services/auth-guard.service';
import { RoadmapCreateComponent } from './components/roadmap-create/roadmap-create.component';
import { RoadmapTravelListComponent } from './components/roadmap-travel-list/roadmap-travel-list.component';

const ROADMAP_CREATE = {
  path: '',
  component: RoadmapCreateComponent,
  canActivate: [AuthGuardService],
};
const ROADMAP_TRAVEL_LIST = {
  path: 'travels',
  component: RoadmapTravelListComponent,
  canActivate: [AuthGuardService],
};

const routes: Routes = [ROADMAP_CREATE, ROADMAP_TRAVEL_LIST];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadmapRoutingModule {}
