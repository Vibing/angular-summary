import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Json2formComponent } from './json2form/json2form.component';

const routes: Routes = [{ path: 'json2form', component: Json2formComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
