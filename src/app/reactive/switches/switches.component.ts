import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    newsletter: [true, Validators.required],
    cgu: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    newsletter: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm.reset({ ...this.person, cgu: false });
    this.myForm.valueChanges.subscribe(({ cgu, ...rest }) => {
      this.person = rest;
    });
  }
}
