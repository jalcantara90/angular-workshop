import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-data-binding',
  templateUrl: './attribute-data-binding.component.html',
  styleUrls: ['./attribute-data-binding.component.scss']
})
export class AttributeDataBindingComponent {
  title = 'My awesome app';
  width = 200;
  inputValue = 'Angular';
  angularLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  documentation = 'https://angular.io/api/core/Component'
}
