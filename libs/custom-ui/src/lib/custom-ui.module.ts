import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNewPasswordModule } from './input-new-password/input-new-password.module';

@NgModule({
  imports: [CommonModule, InputNewPasswordModule],
  exports: [InputNewPasswordModule],
})
export class CustomUiModule {}
