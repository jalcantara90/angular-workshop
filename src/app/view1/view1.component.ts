import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  template: `
    <p>view1 works!</p>
  `,
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
