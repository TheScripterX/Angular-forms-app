import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//
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
      ],
      username: ['', [Validators.required, this.validator.cantBeNaruto]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [this.validator.mustMatch('password', 'confirmPassword')] }
  );

  constructor(private fb: FormBuilder, private validator: ValidatorService) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: '',
      email: '',
      username: '',
    });
  }

  isInvalid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  register() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
