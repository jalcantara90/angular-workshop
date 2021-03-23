import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-my-component
      [(amount)]="amount">
    </app-my-component>
    total: {{amount}}
  `,
})
export class AppComponent {
  amount = 100;
}
