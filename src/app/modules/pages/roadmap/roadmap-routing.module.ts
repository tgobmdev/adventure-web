import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapCreateComponent } from './roadmap-create/roadmap-create.component';

const ROADMAP_CREATE = { path: '', component: RoadmapCreateComponent };

const routes: Routes = [ROADMAP_CREATE];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadmapRoutingModule {}
