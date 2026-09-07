import { Component, OnInit } from '@angular/core';
import { HomeSliderComponent } from "../../components/home-slider/home-slider.component";


@Component({
  selector: 'app-home-page',
  imports: [HomeSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  code = `const developer = {
  name: "Mohamed Anwar",
  role: "Junior Angular Developer",
  location: "Egypt",

  passion: [
    "Frontend Development",
    "Angular",
    "Building Modern UIs"
  ]`;

  displayedCode = '';

  private currentIndex = 0;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    if (this.currentIndex < this.code.length) {

      this.displayedCode += this.code[this.currentIndex];

      this.currentIndex++;

      setTimeout(() => {
        this.startTyping();
      }, 15);
    }
  }
}
