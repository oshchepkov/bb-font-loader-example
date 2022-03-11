import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { Validation } from '../validators';

@Component({
  selector: 'zb-input-new-password-ui',
  templateUrl: 'input-new-password.component.html',
  styleUrls: ['input-new-password.component.scss'],
})
export class InputNewPasswordComponent extends FieldType {
  formControl!: FormControl;

  get hasMinLenghtError(): boolean {
    return this.formControl.errors?.[Validation.PasswordMinLength];
  }

  get hasNumberError(): boolean {
    return this.formControl.errors?.[Validation.PasswordHasNumber];
  }

  get hasUppercaseError(): boolean {
    return this.formControl.errors?.[Validation.PasswordHasUppercase];
  }

  get hasSpecialCharacterError(): boolean {
    return this.formControl.errors?.[Validation.PasswordHasSpecialCharacter];
  }

  get hasPasswordsMatchError(): boolean {
    return this.formControl.errors?.[Validation.PasswordsMatch];
  }
}
