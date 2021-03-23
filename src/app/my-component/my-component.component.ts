import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <input type="number"
      [value]="amount"
      (keyup)="updateAmount($event)">
  `,
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  @Input() amount: number;
  @Output() amountChange = new EventEmitter<number>();

  updateAmount(event: any) {
    this.amountChange.emit(event.target.value);
  }
}
