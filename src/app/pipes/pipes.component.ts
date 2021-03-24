import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipes',
  template: `
    <p>Without pipe:</p>
    <blockquote>
      <p>date: {{ dateValue }}</p>
      <p>text: {{ text }}</p>
      <p>percentage: {{ percentage }}</p>
      <p>million: {{ million }}</p>
      <p>amount: {{ amount }}</p>
    </blockquote>
    <p>With pipe:</p>
    <blockquote>
    <p>date: {{ dateValue | date }}</p>
      <p>text upper: {{ text | uppercase }}</p>
      <p>text lower: {{ text | lowercase }}</p>
      <p>percentage: {{ percentage | percent }}</p>
      <p>million: {{ million | number }}</p>
      <p>amount: {{ amount | currency }}</p>
      <p>observable: {{ observable$ | async }}</p>
    </blockquote>
  `,
})
export class PipesComponent {
  amount = 100;
  dateValue = new Date();
  text = 'Angular';
  percentage = 20;
  million = 1_000_000;
  observable$ = interval(100);
}
