import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cobertura',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cobertura.html',
  styleUrl: './cobertura.scss'
})
export class CoberturaComponent {
  @ViewChild('sectionRef') sectionRef!: ElementRef;
  isVisible = false;

  // Variables para el buscador de cobertura
  zonaBusqueda: string = '';
  resultadoBusqueda: 'en-zona' | 'sin-zona' | null = null;
  mensajeResultado: string = '';

  zonasDisponibles = [
    'chincha alta', 
    'grocio prado', 
    'sunampe', 
    'chincha baja', 
    'pueblo nuevo'
  ];

  verificarCobertura() {
    const zonaLimpia = this.zonaBusqueda.toLowerCase().trim();
    if (!zonaLimpia) return;

    const encontrada = this.zonasDisponibles.some(zona => zonaLimpia.includes(zona));

    if (encontrada) {
      this.resultadoBusqueda = 'en-zona';
      this.mensajeResultado = '¡Excelente noticia! Contamos con cobertura de fibra óptica de alta velocidad en tu zona.';
    } else {
      this.resultadoBusqueda = 'sin-zona';
      this.mensajeResultado = 'Aún no estamos en esta zona exacta, ¡pero déjanos tu número y te avisaremos cuando lleguemos!';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isVisible) return;
    if (this.sectionRef) {
      const rect = this.sectionRef.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}