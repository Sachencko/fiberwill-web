import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer';

interface MiembroEquipo {
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './nosotros.html',
  styles: ``
})
export class SobreNosotrosComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  equipo: MiembroEquipo[] = [
    {
      nombre: 'William',
      cargo: 'CEO & Founder',
      descripcion: 'Liderazgo estratégico y visión tecnológica para expandir la alta velocidad en la región.',
      imagen: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
    },
    {
      nombre: 'Ángel Sachencko Bonifacio Martínez',
      cargo: 'Colaborador / Systems Engineer',
      descripcion: 'Desarrollo de infraestructura de sistemas, backend y optimización de plataformas digitales.',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
    },
    {
      nombre: 'Carlos',
      cargo: 'Colaborador / Soporte Técnico',
      descripcion: 'Instalaciones de fibra óptica, mantenimiento de nodos y atención técnica especializada.',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
    },
    {
      nombre: 'Kevin',
      cargo: 'Colaborador / Operaciones',
      descripcion: 'Gestión logística, control de calidad de red y soporte en campo para clientes.',
      imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80'
    }
  ];

  abrirEnlaceOficial() {
    window.open('https://www.universidadperu.com/empresas/fiberwill.php', '_blank');
  }

  moverCarrusel(direccion: 'izquierda' | 'derecha') {
    const contenedor = this.scrollContainer.nativeElement;
    const desplazamiento = 320;
    if (direccion === 'izquierda') {
      contenedor.scrollBy({ left: -desplazamiento, behavior: 'smooth' });
    } else {
      contenedor.scrollBy({ left: desplazamiento, behavior: 'smooth' });
    }
  }
}