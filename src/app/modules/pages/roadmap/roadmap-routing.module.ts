import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapCreateComponent } from './components/roadmap-create/roadmap-create.component';
import { RoadmapTravelListComponent } from './components/roadmap-travel-list/roadmap-travel-list.component';

const ROADMAP_CREATE = {
  path: '',
  component: RoadmapCreateComponent,
};
const ROADMAP_TRAVEL_LIST = {
  path: 'travels',
  component: RoadmapTravelListComponent,
};

const routes: Routes = [ROADMAP_CREATE, ROADMAP_TRAVEL_LIST];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadmapRoutingModule {}
