import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Json2formComponent } from './json2form/json2form.component';
import { TestComponent } from './test-page/test.component';

const routes: Routes = [
  { path: 'json2form', component: Json2formComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
