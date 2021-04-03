import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  log(): void {
    console.log('Button clicked', new Date());
  }

  inputChanges(event: Event): void {
    console.log(event);
  }

}
