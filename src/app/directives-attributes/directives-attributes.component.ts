import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-attributes',
  template: `
    <button (click)="toggleCSSClass()"> Toggle success </button>
    <button (click)="toogleItalicStyle()"> italic </button>

    <div [ngClass]="{ 'success': isSuccess }">
      <p [ngStyle]="{ 'font-style': isItalic ? 'italic' : 'normal' }">
        Text style is {{ isSuccess ? 'Italic' : 'Not Italic'}}
      </p>
    </div>
  `,
  styles: [`
    .success {
      background: #28e128;
    }
  `]
})
export class DirectivesAttributesComponent {
  isSuccess = false;
  isItalic = false;

  toggleCSSClass() {
    this.isSuccess = !this.isSuccess;
  }

  toogleItalicStyle() {
    this.isItalic = !this.isItalic;
  }
}
