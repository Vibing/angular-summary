import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <pre>
    <p>{{jsonData}}</p>
    <button (click)="changeJSON()">changeJson</button>
  </pre>
  `,
})
export class ChildComponent implements OnInit {
  @Input() jsonData: any;
  constructor() {}

  ngOnInit(): void {}

  changeJSON() {
    this.jsonData = 'Chenlong';
    console.log('child0->', this.jsonData);
  }
}
