import { NgModule } from '@angular/core';

import { InfoComponent } from './info/info.component';
import { CommonModule } from '@angular/common';
import { JobDirective } from './job/job.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzDatePickerModule,
    NzRadioModule,
  ],
  exports: [InfoComponent, JobDirective],
  declarations: [InfoComponent, JobDirective],
  providers: [],
})
export class CustomerModule {}
