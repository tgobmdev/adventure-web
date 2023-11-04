import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    ContentSectionComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
