import { Injectable } from '@angular/core';
import {
  FormGroup,
  ValidatorFn,
  Validators,
  FormControl,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Injectable()
export class Json2FormService {
  constructor(private fb: FormBuilder) {}

  // 使用递归组成form
  addFormItems(items: any[], form: FormGroup) {
    items.forEach((item) => {
      const isRequired = item.isRequired || false;
      if (!form.contains(item.controlName)) {
        if (item.type === 'control') {
          this.addFormControl(
            item.controlName,
            item.defaultValue || null,
            isRequired,
            form
          );
          return;
        }
        if (item.type === 'group') {
          const group = this.addFormGroup(item.controlName, form);
          this.addFormItems(item.children, group);
          return;
        }
        if (item.type === 'array') {
          this.addFormArray(item.controlName, form);
          return;
        }
      }
    });
  }

  /**
   * 添加FormControl
   * @param key
   * @param value
   * @param isRequired
   */
  addFormControl(
    key: string,
    value: any,
    isRequired: boolean,
    form: FormGroup
  ): void {
    const fns: ValidatorFn[] = [];
    if (isRequired) {
      fns.push(Validators.required);
    }
    if (!form.contains(key)) {
      form.addControl(key, new FormControl(value, fns));
    }
  }

  /**
   * 添加FormGroup
   */
  addFormGroup(key: string, form: FormGroup): FormGroup {
    form.addControl(key, this.fb.group({}));
    return form.get(key) as FormGroup;
  }

  /**
   * 添加FormArray
   * @param key arrayName
   */
  addFormArray(key: string, form: FormGroup) {
    form.addControl(key, new FormArray([]));
  }

  /**
   * 表单递归验证
   * @param form
   */
  validatorForm(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      if (!control.invalid) return;

      if (control instanceof FormControl) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
        return;
      }

      if (control instanceof FormGroup) {
        this.validatorForm(control);
        return;
      }

      if (control instanceof FormArray) {
        (control as FormArray).controls.forEach((group: any) => {
          this.validatorForm(group);
        });
      }
    });
  }
}
