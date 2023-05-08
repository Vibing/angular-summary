import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'home-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() readonly isVisibleChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }
}
