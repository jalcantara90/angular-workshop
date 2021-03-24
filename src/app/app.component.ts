import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/view1"> view1 </a>
    <button (click)="navigateToView2()"> view2 </button>
    <a routerLink="/rick-and-morty"> Lazy load module </a>
    <br/>
    <br/>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  amount = 100;

  constructor(private router: Router) {}

  navigateToView2() {
    this.router.navigateByUrl('/view2');
  }
}
