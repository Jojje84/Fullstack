import { Component } from '@angular/core';

@Component({
  selector: 'app-lektion1',
  imports: [],
  templateUrl: './lektion1.component.html',
  styleUrl: './lektion1.component.scss'
})
export class Lektion1Component {
  public width: number = 12;
  public height: number = 7;
  public items: Item[] = [{ name: 'note' }];

  constructor() {
    this.createUser('John', 42);
  }

  calculateArea(width: number, height: number): number {
    return width * height;
  }

  public createUser(name: string, age: number): User {
    return { name: name, age: age };
  }

  public addItems(items: Item[], item: Item) {
    items.push(item);
    return items;
  }
}

interface User {
  name: string;
  age: number;
}

interface Item {
  name: string;
}