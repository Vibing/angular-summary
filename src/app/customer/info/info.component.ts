import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-info',
  template: `
    <p>Customer Info Component</p>
    <button nz-button>{{ name }}</button>

    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">large</label>
      <label nz-radio-button nzValue="default">default</label>
      <label nz-radio-button nzValue="small">small</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-date-picker [nzSize]="size"></nz-date-picker>
    <br />
    <nz-date-picker nzMode="week" [nzSize]="size"></nz-date-picker>
    <br />
    <nz-date-picker nzMode="month" [nzSize]="size"></nz-date-picker>
    <br />
    <nz-range-picker [nzSize]="size"></nz-range-picker>
  `,
})
export class InfoComponent implements OnInit {
  @Input() name!: string;

  size: 'large' | 'small' | 'default' = 'default';

  constructor() {}

  ngOnInit() {}
}
