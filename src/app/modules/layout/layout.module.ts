import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';
import { LayoutNavComponent } from './components/layout-nav/layout-nav.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutNavComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutComponent,
  ],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
