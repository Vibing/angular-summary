import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Json2formComponent } from './json2form/json2form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModules } from 'src/app/nz-components';
import { ChildComponent } from './json2form/child.component';
import { TestComponent } from './test-page/test.component';

@NgModule({
  declarations: [Json2formComponent, ChildComponent, TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    ...NzModules,
  ],
})
export class FormModule {}
