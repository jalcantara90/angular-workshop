import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  amount = 100;

  constructor(private router: Router) {}

  navigateToView2() {
    this.router.navigateByUrl('/view2');
  }
}
