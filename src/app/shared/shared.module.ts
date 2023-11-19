import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from './components/button/button.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    CardFormComponent,
    ButtonComponent,
    GalleryComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    GalleriaModule,
    TableModule,
  ],
  exports: [
    CardFormComponent,
    ButtonComponent,
    GalleryComponent,
    TableComponent,
  ],
})
export class SharedModule {}
