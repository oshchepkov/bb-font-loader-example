import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { InputNewPasswordComponent } from '../input-new-password/input-new-password.component';
import { InputNewPasswordModule } from '../input-new-password/input-new-password.module';
import {
  passwordHasNumberValidator,
  passwordHasSpecialCharacterValidator,
  passwordHasUppercaseValidator,
  passwordsMinLengthValidator,
  Validation,
} from '../validators';
import { TestPasswordJourneyComponent } from './test-password-form.component';

@NgModule({
  declarations: [TestPasswordJourneyComponent],
  imports: [
    CommonModule,
    InputNewPasswordModule,

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
      ],
    }),
  ],
  exports: [TestPasswordJourneyComponent],
})
export class TestPasswordJourneyModule {}
