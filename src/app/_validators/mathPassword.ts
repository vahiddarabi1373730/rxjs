import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

export class MathPassword {
  static validate(control: AbstractControl): any {
    const { password, passwordConfirmation } = control.value;
    if (password === passwordConfirmation) return null;
    else {
      return {
        passwordDoNotMatch: true,
      };
    }
  }
}
