import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validator.fullNamePattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.validator.emailPattern)],
        [this.emailV],
      ],
      username: ['', [Validators.required, this.validator.cantBeNaruto]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [this.validator.mustMatch('password', 'confirmPassword')] }
  );

  get errorEmailMessage(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email required';
    } else if (errors?.pattern) {
      return 'Must be an Email format';
    } else if (errors?.emailTaken) {
      return 'Email already in use';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorService,
    private emailV: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'wass h',
      email: 'test1@test.com',
      username: 'test1',
      password: '123456',
      confirmPassword: '123456',
    });
  }

  isInvalid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  emailRequired() {
    return (
      this.myForm.get('email')?.errors?.required &&
      this.myForm.get('email')?.touched
    );
  }

  emailFormat() {
    return (
      this.myForm.get('email')?.errors?.pattern &&
      this.myForm.get('email')?.touched
    );
  }

  emailTaken() {
    return (
      this.myForm.get('email')?.errors?.emailTaken &&
      this.myForm.get('email')?.touched
    );
  }

  register() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
