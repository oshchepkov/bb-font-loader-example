import { InjectionToken } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

export interface NewPasswordValidatorConfiguration {
  label: string;
  name: string;
  validation: ValidatorFn;
}

export interface InputNewPasswordConfiguration {
  validators: NewPasswordValidatorConfiguration[];
}

export const InputNewPasswordConfigurationToken = new InjectionToken<InputNewPasswordConfiguration>(
  'InputNewPasswordConfiguration injection token',
);
