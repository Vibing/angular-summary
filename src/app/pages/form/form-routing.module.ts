import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Json2formComponent } from './json2form/json2form.component';
import { TestPageComponent } from './test-page/test-page.component';
import { DynamicTestComponent } from './dynamic-test/dynamic-test.component';

const routes: Routes = [
  { path: 'json2form', component: Json2formComponent },
  { path: 'test-page', component: DynamicTestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
