import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl hover:opacity-90 " (click)="handleButtonClick()" [class]="class()">
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');
  class= input('');

  btnClicked = output();
  handleButtonClick() {
    this.btnClicked.emit();
  }
}
