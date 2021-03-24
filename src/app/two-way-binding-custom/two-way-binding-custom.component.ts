import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-custom',
  templateUrl: './two-way-binding-custom.component.html',
  styleUrls: ['./two-way-binding-custom.component.scss']
})
export class TwoWayBindingCustomComponent implements OnInit {
  amount = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
