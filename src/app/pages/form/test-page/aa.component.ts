import { Component, OnInit } from '@angular/core';
import { TestPageService } from './test-page.service';

@Component({
  selector: 'form-aa',
  template: `
    <button (click)="change()">{{ service.count }}</button>
    <hr />
    <form-bb></form-bb>
  `,
})
export class AAComponent implements OnInit {
  constructor(public service: TestPageService) {}

  ngOnInit() {}

  change() {
    this.service.count++;
  }
}
