import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  cantBeNaruto(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'naruto') {
      return {
        noNaruto: true,
      };
    }
    return null;
  }

  mustMatch(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(field1)?.value;
      const confirmPass = formGroup.get(field2)?.value;

      if (password !== confirmPass) {
        formGroup.get(field2)?.setErrors({ noMatch: true });
        return { noMatch: true };
      } else {
        formGroup.get(field2)?.setErrors(null);
      }

      return null;
    };
  }
}
