import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { HomeSliderComponent } from "./features/home/components/home-slider/home-slider.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  

  private readonly flowbiteService =inject(FlowbiteService)
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
     flowbite.initFlowbite();
    });
  }
}
