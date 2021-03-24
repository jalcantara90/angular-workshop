import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  template: `
    filter: <input type="text" [(ngModel)]="filterValue"   >
    <ul>
      <li *ngFor="let fruit of fruits | filter:'name':filterValue">
        {{ fruit.name }} - {{fruit.quantity}}
      </li>
    </ul>
  `,
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent {
  fruits = [
    { name: 'Watermelon', quantity: 3 },
    { name: 'Strawberry', quantity: 10 },
    { name: 'Lemon', quantity: 20 },
    { name: 'Banana', quantity: 3 },
    { name: 'Oranges', quantity: 7 },
  ];

  filterValue: '';
}
