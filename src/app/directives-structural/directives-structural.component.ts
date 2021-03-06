import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-structural',
  templateUrl: './directives-structural.component.html',
  styleUrls: ['./directives-structural.component.scss']
})
export class DirectivesStructuralComponent {
  fruits = [
    { name: 'Watermelon', quantity: 3 },
    { name: 'Strawberry', quantity: 10 },
    { name: 'Lemon', quantity: 20 },
    { name: 'Banana', quantity: 3 },
    { name: 'Oranges', quantity: 7 },
  ];
  animals = [
    'Piggies',
    'Dogs',
    'Cats'
  ];
  list = 'fruits';

  toogleVisibilityList() {
    this.list = this.list === 'fruits' ? 'animals' : 'fruits';
  }
}
