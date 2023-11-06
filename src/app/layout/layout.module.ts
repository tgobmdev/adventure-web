import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    LayoutContentComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
