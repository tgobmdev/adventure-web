import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';

@NgModule({
  declarations: [DestinationComponent, DestinationListComponent],
  imports: [CommonModule, SharedModule, DestinationRoutingModule],
})
export class DestinationModule {}
