import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Json2formComponent } from './json2form/json2form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModules } from 'src/app/nz-components';
import { ChildComponent } from './json2form/child.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AAComponent } from './test-page/aa.component';
import { BBComponent } from './test-page/bb.component';
import { DynamicTestComponent } from './dynamic-test/dynamic-test.component';

@NgModule({
  declarations: [
    Json2formComponent,
    ChildComponent,
    TestPageComponent,
    AAComponent,
    BBComponent,
    DynamicTestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    ...NzModules,
  ],
})
export class FormModule {}
