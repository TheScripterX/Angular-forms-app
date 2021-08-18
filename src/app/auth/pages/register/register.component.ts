import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  // Temporary code --Start

  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  cantBeNaruto(control: FormControl) {
    const value = control.value?.trim().toLowerCase();
    if (value === 'naruto') {
      return {
        noNaruto: true,
      };
    }
    return null;
  }

  // Temporary code --End

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.fullNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.cantBeNaruto]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Wassim Hamdoun',
      email: 'test1@gmail.com',
      username: 'hasimdev',
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
