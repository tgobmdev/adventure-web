import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from '../../../shared/shared.module';
import { RoadmapCreateComponent } from './components/roadmap-create/roadmap-create.component';
import { RoadmapTravelListComponent } from './components/roadmap-travel-list/roadmap-travel-list.component';
import { RoadmapRoutingModule } from './roadmap-routing.module';

@NgModule({
  declarations: [RoadmapCreateComponent, RoadmapTravelListComponent],
  imports: [
    CommonModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule,
    SharedModule,
    RoadmapRoutingModule,
  ],
})
export class RoadmapModule {}
