import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  passmatch: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass1 = control.get('password');
    const pass2 = control.get('cpassword');

    return pass1 && pass2 && pass1.value !== pass2.value
      ? { mismatch: true }
      : null;
  };
}
