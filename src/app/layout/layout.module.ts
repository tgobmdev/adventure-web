import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [NavbarComponent, LayoutComponent, FooterComponent],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
