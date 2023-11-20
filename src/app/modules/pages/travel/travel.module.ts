import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelRoutingModule } from './travel-routing.module';

@NgModule({
  declarations: [TravelListComponent],
  imports: [CommonModule, SharedModule, TravelRoutingModule],
})
export class TravelModule {}
