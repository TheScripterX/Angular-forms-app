import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [],
})
export class DynamicComponent {
  newValue: string = '';

  person: Person = {
    name: 'Wassim',
    favorites: [
      { id: 1, name: 'PES 2021' },
      { id: 2, name: 'APEX Legends' },
    ],
  };

  save() {
    console.log(this.person);
  }

  add() {
    const newGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newValue,
    };
    this.person.favorites.push({ ...newGame });
    this.newValue = '';
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }
}
