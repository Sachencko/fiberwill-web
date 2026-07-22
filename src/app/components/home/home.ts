import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { VentajasComponent } from '../ventajas/ventajas';
import { PlanesComponent } from '../planes/planes';
import { CoberturaComponent } from '../cobertura/cobertura';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, VentajasComponent, PlanesComponent, CoberturaComponent, FooterComponent],
  templateUrl: './home.html',
  styles: ``
})
export class HomeComponent {}