import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from './components/button/button.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [CardFormComponent, ButtonComponent],
  imports: [CommonModule, CardModule, ReactiveFormsModule],
  exports: [CardFormComponent, ButtonComponent],
})
export class SharedModule {}
