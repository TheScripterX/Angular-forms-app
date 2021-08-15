import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [],
})
export class DynamicComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['PES 2021', Validators.required],
        ['League of Legends', Validators.required],
        ['OverWatch', Validators.required],
      ],
      Validators.required
    ),
  });

  get favoritesArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  newGame: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addGame() {
    if (this.newGame.invalid) {
      return;
    }
    this.favoritesArray.push(
      this.fb.control(this.newGame.value, Validators.required)
    );
    this.newGame.reset();
  }

  deleteGame(index: number) {
    this.favoritesArray.removeAt(index);
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    // this.myForm.reset();
  }
}
