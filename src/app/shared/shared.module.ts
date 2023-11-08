import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [CardFormComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [CardFormComponent, ButtonComponent],
})
export class SharedModule {}
