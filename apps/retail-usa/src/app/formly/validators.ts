import { AbstractControl, ValidationErrors } from '@angular/forms';

export const MINIMUM_PASSWORD_LENGTH = 8;

const numbersRegex = new RegExp('[0-9]');
const upperCaseRegex = new RegExp('[A-Z]');
const specialCharactersRegex = new RegExp('[^A-Za-z0-9]');

export enum Validation {
  PasswordsMatch = 'passwordsMatch',
  PasswordMinLength = 'passwordMinLength',
  PasswordHasNumber = 'passwordHasNumber',
  PasswordHasUppercase = 'passwordHasUppercase',
  PasswordHasSpecialCharacter = 'passwordHasSpecialCharacter',
}

export function passwordsMatchValidator(control: AbstractControl) {
  // TO-DO: implement proper logic
  const { newPassword, confirmNewPassword } = control.value;
  if (confirmNewPassword === newPassword) {
    return null;
  }
  return { [Validation.PasswordsMatch]: { message: "Passwords don' Match" } };
}

export function passwordsMinLengthValidator({ value }: AbstractControl): null | ValidationErrors {
  return value && value.toString().length >= MINIMUM_PASSWORD_LENGTH ? null : { [Validation.PasswordMinLength]: true };
}

export function passwordHasNumberValidator({ value }: AbstractControl): null | ValidationErrors {
  return numbersRegex.test(value || '') ? null : { [Validation.PasswordHasNumber]: true };
}

export function passwordHasUppercaseValidator({ value }: AbstractControl): null | ValidationErrors {
  return upperCaseRegex.test(value || '') ? null : { [Validation.PasswordHasUppercase]: true };
}

export function passwordHasSpecialCharacterValidator({ value }: AbstractControl): null | ValidationErrors {
  return specialCharactersRegex.test(value || '') ? null : { [Validation.PasswordHasSpecialCharacter]: true };
}
