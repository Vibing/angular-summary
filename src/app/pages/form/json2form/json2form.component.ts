import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Json2FormService } from './json2form.service';

@Component({
  selector: 'app-json2form',
  templateUrl: './json2form.component.html',
  styleUrls: ['../form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Json2FormService],
})
export class Json2formComponent implements OnInit {
  form!: FormGroup;
  formSetting = [
    // control
    { controlName: 'name', type: 'control', defaultValue: 'Jack' },
    // group
    {
      controlName: 'infos',
      type: 'group',
      children: [
        { controlName: 'tel', type: 'control', requred: true },
        { controlName: 'email', type: 'control', requred: true },
      ],
    },
    // array
    { controlName: 'hobby', type: 'array' },
  ];

  get hobbies() {
    return this.form.get('hobby') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private service: Json2FormService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({});
    // 根据配置生成 Form
    this.service.addFormItems(this.formSetting, this.form);
    (window as any).form = this.form;
  }

  ngOnInit(): void {}

  addHobby() {
    const hobbyName = this.fb.group({
      hobbyName: [null, Validators.required],
    });
    this.hobbies.push(hobbyName);
  }

  settingChange(value: any) {
    console.log(value);

    this.form = this.fb.group({});

    // 更新配置
    this.formSetting = JSON.parse(value);

    // 重组
    this.service.addFormItems(this.formSetting, this.form);
    this.cdr.detectChanges();
  }

  reset() {
    /**
     * 清除所有动态表单项
     */
    this.formSetting.forEach((item) => {
      if (!this.form.contains(item.controlName)) {
        this.form.removeControl(item.controlName);
      }
    });
  }

  submit() {
    if (this.form.valid) {
      const params = this.form.getRawValue();
    } else {
      this.service.validatorForm(this.form);
    }
  }
}
