import { AbstractControl } from '@angular/forms';

export class MathValidation {
  static additional(target, a, b) {
    return (form: AbstractControl) => {
      const sum = form.value.total;
      const a = form.value.a;
      const b = form.value.b;
      if (a + b === parseInt(sum)) return null;

      return { additional: true };
    };
  }
}
