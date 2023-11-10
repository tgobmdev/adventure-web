import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TravelRoutingModule } from './travel-routing.module';
import { TravelComponent } from './travel.component';

@NgModule({
  declarations: [TravelComponent],
  imports: [CommonModule, TravelRoutingModule],
})
export class TravelModule {}
