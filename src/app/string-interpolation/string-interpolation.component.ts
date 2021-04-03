import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
  title = 'My awesome app';
  five = 5;

  subtitle() {
    return 'Angular is amazing!';
  }

  get documentation() {
    return 'https://angular.io/api/core/Component';
  }

  constructor() { }

}
