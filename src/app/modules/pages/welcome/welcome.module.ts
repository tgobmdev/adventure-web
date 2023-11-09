import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleriaModule } from 'primeng/galleria';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, GalleriaModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
