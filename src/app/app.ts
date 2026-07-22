import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { PlanesComponent } from './components/planes/planes';
import { CoberturaComponent } from './components/cobertura/cobertura';
import { FooterComponent } from './components/footer/footer';
import { VentajasComponent } from './components/ventajas/ventajas';
import { SobreNosotrosComponent } from './components/nosotros/nosotros';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, PlanesComponent, CoberturaComponent, FooterComponent, VentajasComponent, SobreNosotrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'fiberwill-web';
}