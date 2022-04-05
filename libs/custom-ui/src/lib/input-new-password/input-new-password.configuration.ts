import { InjectionToken } from '@angular/core';
import { ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';

export interface NewPasswordValidatorConfiguration {
  validator: string;
  label: string;
}

export interface InputNewPasswordConfiguration {
  validators: NewPasswordValidatorConfiguration[];
}

export const InputNewPasswordConfigurationToken = new InjectionToken<InputNewPasswordConfiguration>(
  'InputNewPasswordConfiguration injection token',
);
