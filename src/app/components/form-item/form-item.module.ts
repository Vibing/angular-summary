import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormItemComponent } from './form-item.component';

@NgModule({
  declarations: [FormItemComponent],
  imports: [ CommonModule,NzFormModule ],
  exports: [],
  providers: [],
})
export class FormItemModule {}