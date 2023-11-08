import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';

@NgModule({
  declarations: [DestinationComponent],
  imports: [CommonModule, DestinationRoutingModule, CardModule],
})
export class DestinationModule {}
