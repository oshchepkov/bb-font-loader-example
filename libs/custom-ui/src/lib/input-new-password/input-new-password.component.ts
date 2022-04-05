import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { InputNewPasswordConfiguration, InputNewPasswordConfigurationToken } from './input-new-password.configuration';

@Component({
  selector: 'bb-input-new-password',
  templateUrl: './input-new-password.component.html',
  styleUrls: ['./input-new-password.component.scss']
})
export class InputNewPasswordComponent extends FieldType implements OnInit {

  formControl!: FormControl;


  constructor(@Optional() @Inject(InputNewPasswordConfigurationToken) _config: InputNewPasswordConfiguration) {
    super();
    // this.config = _config;
    console.log('config', _config);

    // this.validators = this.config.validators.reduce((validators: string[], config: NewPasswordValidatorConfiguration) => {
    //   validators.push(config.validator);
    //   return validators;
    // }, []);

    // console.log('this.validators', this.validators);

    // this.initializeForm(this.validators);
  }

  get hasMinLenghtError(): boolean {
    // return this.formControl.errors?.[Validation.PasswordMinLength];
    return false;
  }

  // get hasNumberError(): boolean {
  //   return this.formControl.errors?.[Validation.PasswordHasNumber];
  // }

  // get hasUppercaseError(): boolean {
  //   return this.formControl.errors?.[Validation.PasswordHasUppercase];
  // }

  // get hasSpecialCharacterError(): boolean {
  //   return this.formControl.errors?.[Validation.PasswordHasSpecialCharacter];
  // }

  // get hasPasswordsMatchError(): boolean {
  //   return this.formControl.errors?.[Validation.PasswordsMatch];
  // }

  ngOnInit(): void {
  }

}
