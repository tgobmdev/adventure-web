import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapComponent } from './roadmap.component';

const ROADMAP_HOME = { path: '', component: RoadmapComponent };

const routes: Routes = [ROADMAP_HOME];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadmapRoutingModule {}
