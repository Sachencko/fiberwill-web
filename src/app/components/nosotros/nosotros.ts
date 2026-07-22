import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './nosotros.html',
  styles: ``
})
export class SobreNosotrosComponent {
  abrirEnlaceOficial() {
    window.open('https://www.universidadperu.com/empresas/fiberwill.php', '_blank');
  }
}