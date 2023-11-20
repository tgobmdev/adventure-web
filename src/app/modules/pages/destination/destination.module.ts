import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationRoutingModule } from './destination-routing.module';

@NgModule({
  declarations: [DestinationListComponent],
  imports: [CommonModule, SharedModule, DestinationRoutingModule],
})
export class DestinationModule {}
