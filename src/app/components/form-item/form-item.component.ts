import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { NzTSType } from 'ng-zorro-antd/core/types';
import { ThemeType } from '@ant-design/icons-angular';
import { AbstractControl, NgModel } from '@angular/forms';

export interface NzFormTooltipIcon {
  type: NzTSType;
  theme: ThemeType;
}

@Component({
  selector: 'app-form-item',
  template: `<nz-form-item>
    <nz-form-label
      *ngIf="label"
      [nzSpan]="labelSpan"
      [nzFor]="nzFor"
      [nzRequired]="nzRequired"
      [nzNoColon]="nzNoColon"
      [nzTooltipTitle]="nzTooltipTitle"
      [nzTooltipIcon]="nzTooltipIcon"
      >{{ label }}</nz-form-label
    >
    <nz-form-control
      [nzSpan]="controlSpan"
      [nzSuccessTip]="nzSuccessTip"
      [nzWarningTip]="nzWarningTip"
      [nzErrorTip]="nzErrorTip"
      [nzValidatingTip]="nzValidatingTip"
      [nzExtra]="nzExtra"
      [nzAutoTips]="nzAutoTips"
      [nzDisableAutoTips]="nzDisableAutoTips"
      [nzHasFeedback]="nzHasFeedback"
      [nzValidateStatus]="nzValidateStatus"
    >
      <ng-content></ng-content>
    </nz-form-control>
  </nz-form-item>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemComponent implements OnInit {
  /* label */
  @Input() label?: string;
  @Input() labelSpan?: any;
  @Input() nzFor?: string;
  @Input() nzRequired: boolean = false;
  @Input() nzNoColon = 'default';
  @Input() nzTooltipTitle?: string;
  @Input() nzTooltipIcon = 'default';

  /* control */
  @Input() controlSpan?: any;
  @Input() nzSuccessTip?:
    | string
    | TemplateRef<{ $implicit: AbstractControl | NgModel }>;
  @Input() nzWarningTip?:
    | string
    | TemplateRef<{ $implicit: AbstractControl | NgModel }>;
  @Input() nzErrorTip?:
    | string
    | TemplateRef<{ $implicit: AbstractControl | NgModel }>;
  @Input() nzValidatingTip?:
    | string
    | TemplateRef<{ $implicit: AbstractControl | NgModel }>;
  @Input() nzExtra?: string | TemplateRef<void>;
  @Input() nzAutoTips: Record<string, Record<string, string>> = {};
  @Input() nzDisableAutoTips: boolean | 'default' = 'default';
  @Input() nzHasFeedback: boolean = false;
  @Input() nzValidateStatus?: any;

  constructor() {}

  ngOnInit(): void {}
}
