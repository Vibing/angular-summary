import { Component, OnInit } from '@angular/core';
import { TestPageService } from './test-page.service';

@Component({
  selector: 'form-test-page',
  template:`
    <button (click)="change()">{{service.count}}</button>
    <hr>
    <form-aa></form-aa>
  `,
  providers:[TestPageService]
})

export class TestPageComponent implements OnInit {
  constructor(public service:TestPageService) { }

  ngOnInit() { }

  change(){
    this.service.count++
  }
}