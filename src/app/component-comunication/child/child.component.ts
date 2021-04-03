import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() amount: number;
  @Output() amountChange = new EventEmitter<number>();

  updateAmount(event: any) {
    this.amountChange.emit(event.target.value);
  }
}
