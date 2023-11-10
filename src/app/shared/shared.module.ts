import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonComponent } from './components/button/button.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [CardFormComponent, ButtonComponent, GalleryComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    GalleriaModule,
  ],
  exports: [CardFormComponent, ButtonComponent, GalleryComponent],
})
export class SharedModule {}
