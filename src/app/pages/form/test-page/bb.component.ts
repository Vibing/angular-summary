import { Component, OnInit } from '@angular/core';
import { TestPageService } from './test-page.service';

@Component({
  selector: 'form-bb',
  template: `{{ count }}`,
})
export class BBComponent implements OnInit {
  count = 0;

  constructor(private service: TestPageService) {
    this.service.count$.subscribe((res) => {
      console.log(33, res);

      this.count = res;
    });
  }

  ngOnInit() {
    console.log('init');
  }
}
