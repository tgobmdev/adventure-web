import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';

@NgModule({
  declarations: [RoadmapComponent],
  imports: [CommonModule, RoadmapRoutingModule],
})
export class RoadmapModule {}
