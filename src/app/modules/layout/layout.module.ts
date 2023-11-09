import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
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
  imports: [CommonModule, ToastModule, SharedModule],
  exports: [LayoutComponent],
  providers: [MessageService],
})
export class LayoutModule {}
