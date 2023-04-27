import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TestPageService {
  _count = 0;

  get count() {
    return this._count;
  }

  set count(val) {
    this._count = val;
    console.log('s->', val);

    this.count$.next(val);
  }

  count$: BehaviorSubject<any> = new BehaviorSubject(this._count);

  constructor() {}
}
