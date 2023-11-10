import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../../shared/shared.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutNavComponent } from './layout-nav/layout-nav.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutNavComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
  ],
  imports: [CommonModule, ToastModule, SharedModule],
  exports: [LayoutComponent],
  providers: [MessageService],
})
export class LayoutModule {}
