import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LayoutContentComponent } from './content/layout-content.component';
import { LayoutFooterComponent } from './footer/layout-footer.component';
import { LayoutComponent } from './layout.component';
import { LayoutNavComponent } from './nav/layout-nav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutNavComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
