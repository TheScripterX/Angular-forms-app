import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  // Temporary code --Start

  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  // Temporary code --End

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.fullNamePattern)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isInvalid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  register() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
