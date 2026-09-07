import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  imports: [CarouselModule],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
})
export class HomeSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout:1000,
    autoplayHoverPause: false,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: {
        items: 2
      },
      640: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      }
    },
  }
}
