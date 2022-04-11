import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {
  passwordHasNumberValidator,
  passwordHasSpecialCharacterValidator,
  passwordHasUppercaseValidator,
  passwordsMatchValidator,
  passwordsMinLengthValidator,
  Validation,
} from '../validators';
import { TestPasswordJourneyComponent } from './test-password-form.component';
import { InputNewPasswordConfiguration, InputNewPasswordConfigurationToken } from '@backbase/custom-ui';

import { CustomUiModule, InputNewPasswordComponent } from '@backbase/custom-ui';

@NgModule({
  declarations: [TestPasswordJourneyComponent],
  imports: [
    CommonModule,
    CustomUiModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'new-password',
          component: InputNewPasswordComponent,
        },
      ],
      validators: [
        { name: Validation.PasswordMinLength, validation: passwordsMinLengthValidator },
        { name: Validation.PasswordHasNumber, validation: passwordHasNumberValidator },
        { name: Validation.PasswordHasUppercase, validation: passwordHasUppercaseValidator },
        { name: Validation.PasswordHasSpecialCharacter, validation: passwordHasSpecialCharacterValidator },
        { name: Validation.PasswordsMatch, validation: passwordsMatchValidator },
      ],
    }),
  ],
  providers: [
    {
      provide: InputNewPasswordConfigurationToken,
      useValue: <InputNewPasswordConfiguration>{
        requirementIcon: 'success',
        validators: [
          {
            label: $localize`At least 8 characters`,
            name: Validation.PasswordMinLength,
            validation: passwordsMinLengthValidator,
          },
          {
            label: $localize`Include a number`,
            name: Validation.PasswordHasNumber,
            validation: passwordHasNumberValidator,
          },
          {
            label: $localize`Include an uppercase`,
            name: Validation.PasswordHasUppercase,
            validation: passwordHasUppercaseValidator,
          },
          {
            label: $localize`Include a special character`,
            name: Validation.PasswordHasSpecialCharacter,
            validation: passwordHasSpecialCharacterValidator,
          },
          {
            label: $localize`Passwords match`,
            name: Validation.PasswordsMatch,
            validation: passwordsMatchValidator,
            confirm: true,
          },
        ],
      },
    },
  ],
  exports: [TestPasswordJourneyComponent],
})
export class TestPasswordJourneyModule {}
