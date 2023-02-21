import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Json2formComponent } from './json2form/json2form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModules } from 'src/app/nz-components';

@NgModule({
  declarations: [Json2formComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    ...NzModules,
  ],
})
export class FormModule {}
