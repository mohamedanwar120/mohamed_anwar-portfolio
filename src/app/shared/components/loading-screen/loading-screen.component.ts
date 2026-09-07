import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css',
})
export class LoadingScreenComponent {
  show = signal(true);
  hide = signal(false);

  name = 'Mohamed Anwar';
  letters = this.name.split('');

  constructor() {
    setTimeout(() => this.hide.set(true), 1600);   
    setTimeout(() => this.show.set(false), 2400);  
  }
}