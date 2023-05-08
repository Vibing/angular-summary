import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'selector-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit, AfterViewInit {
  form: any;

  list = ['a', 'b'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    (this.form as FormGroup) = this.fb.group({
      name: [null],
    });
  }

  ngAfterViewInit(): void {
    (this.form as FormGroup).patchValue({
      name: 'b',
    });
    (this.form as FormGroup).updateValueAndValidity({
      emitEvent: false,
      onlySelf: true,
    });
  }

  change(val: string) {
    console.log(val);
  }
}
