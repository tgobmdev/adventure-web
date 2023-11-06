import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutContentComponent } from './content/layout-content.component';
import { LayoutFooterComponent } from './footer/layout-footer.component';
import { LayoutComponent } from './layout.component';
import { LayoutNavComponent } from './nav/layout-nav.component';

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
