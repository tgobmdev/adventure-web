import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from '../../../shared/shared.module';
import { RoadmapCreateComponent } from './roadmap-create/roadmap-create.component';
import { RoadmapRoutingModule } from './roadmap-routing.module';

@NgModule({
  declarations: [RoadmapCreateComponent],
  imports: [
    CommonModule,
    DropdownModule,
    InputNumberModule,
    SharedModule,
    RoadmapRoutingModule,
  ],
})
export class RoadmapModule {}
