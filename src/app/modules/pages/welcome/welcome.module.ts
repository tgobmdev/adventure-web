import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { WelcomeGalleryComponent } from './components/welcome-gallery/welcome-gallery.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { WelcomeInfoComponent } from './components/welcome-info/welcome-info.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeHeaderComponent,
    WelcomeCardComponent,
    WelcomeInfoComponent,
    WelcomeGalleryComponent,
  ],
  imports: [CommonModule, SharedModule, WelcomeRoutingModule],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
