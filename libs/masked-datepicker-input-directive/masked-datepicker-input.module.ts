import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDatepickerModule } from '@backbase/ui-ang';
import { NgxMaskModule } from 'ngx-mask';
import { MaskedDatepickerInputDirective } from './masked-datepicker-input.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MaskedDatepickerInputDirective],
  imports: [CommonModule, InputDatepickerModule, NgxMaskModule.forRoot(), NgbModule],
  exports: [MaskedDatepickerInputDirective],
})
export class MaskedDatepickerInpuModule {}
