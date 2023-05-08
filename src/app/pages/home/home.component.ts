import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    {{ isVisible }}
    <button nz-button [nzType]="'primary'" (click)="showModal()">
      <span>Show Modal</span>
    </button>

    <home-child [isVisible]="isVisible"></home-child>
  `,
})
export class HomeComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit() {}

  showModal(): void {
    this.isVisible = true;
  }
}
