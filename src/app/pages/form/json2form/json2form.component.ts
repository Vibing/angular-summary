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

  bigForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: Json2FormService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({});
    // 根据配置生成 Form

    (window as any).form = this.form;

    this.service.addFormItems(this.formSetting, this.form);

    this.bigForm = this.fb.group({
      name: [null, Validators.required],
      phones: this.fb.array([]),
    });

    (window as any).bigForm = this.bigForm;
  }

  ngOnInit(): void {}

  addHobby() {
    const hobbyName = this.fb.group({
      hobbyName: [null, Validators.required],
    });
    this.hobbies.push(hobbyName);
  }

  settingChange(value: any) {
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

  resetForm() {
    this.form.reset({});
    // 调用了 `markFormGroupPristine` 和 `markFormGroupUntouched` 方法来重置表单状态
    this.service.markFormGroupPristine(this.form);
    this.service.markFormGroupUntouched(this.form);
  }

  addPhone() {
    const arr = this.bigForm.get('phones') as FormArray;

    (this.bigForm.get('phones') as FormArray).push(
      this.fb.group({
        number: [
          { value: arr.length ? null : 123, disabled: !arr.length },
          Validators.required,
        ],
      })
    );
  }

  bigFormSubmit() {
    if (this.bigForm.valid) {
      const params = this.form.getRawValue();
    } else {
      this.service.validatorForm(this.bigForm);
    }
  }

  jsonData = 'Jack';
}
