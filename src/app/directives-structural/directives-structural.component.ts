import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-structural',
  template: `
    <button (click)="toogleVisibilityList()"> Toggle List </button>

    <ul [ngSwitch]="list">
      <ng-container *ngSwitchCase="'animals'">
        <li *ngFor="let animal of animals">
          {{ animal }}
        </li>
      </ng-container>
      <ng-container *ngSwitchCase="'fruits'">
        <li *ngFor="let fruit of fruits">
          {{ fruit.name }} - {{fruit.quantity}}
        </li>
      </ng-container>
    </ul>
    <hr>
    <ul *ngIf="list === 'fruits'">
      <li *ngFor="let fruit of fruits">
        {{ fruit.name }} - {{fruit.quantity}}
      </li>
    </ul>
  `,
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
