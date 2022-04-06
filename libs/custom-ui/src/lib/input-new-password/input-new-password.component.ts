import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import {
  InputNewPasswordConfiguration,
  InputNewPasswordConfigurationToken,
  NewPasswordValidatorConfiguration,
} from './input-new-password.configuration';

@Component({
  selector: 'bb-input-new-password',
  templateUrl: './input-new-password.component.html',
  styleUrls: ['./input-new-password.component.scss'],
})
export class InputNewPasswordComponent extends FieldType implements OnInit {
  formControl!: FormControl;
  config: InputNewPasswordConfiguration;

  constructor(@Optional() @Inject(InputNewPasswordConfigurationToken) _config: InputNewPasswordConfiguration) {
    super();
    this.config = _config;
  }

  ngOnInit(): void {
    this.formControl.addValidators(this.getValidators(this.config));
  }

  getValidators(config: InputNewPasswordConfiguration): ValidatorFn[] {
    const validators = config.validators.reduce((validators: ValidatorFn[], vc: NewPasswordValidatorConfiguration) => {
      validators.push(vc.validation);
      return validators;
    }, []);
    return validators;
  }
}
