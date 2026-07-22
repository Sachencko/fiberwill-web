import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.html',
  styleUrl: './planes.scss'
})
export class PlanesComponent {
  @ViewChild('sectionRef') sectionRef!: ElementRef;
  isVisible = false;

  tipoServicio: 'internet' | 'duo' = 'internet';

  planes = [
    {
      nombre: 'Básico',
      velocidad: '100 Mbps',
      precioInternet: '40.00',
      precioDuo: '80.00',
      caracteristicas: [
        'Fibra 100% simétrica', 
        'Router WiFi Dual Band', 
        'Soporte técnico 24/7', 
        'Instalación gratuita'
      ],
      destacado: false
    },
    {
      nombre: 'Familiar',
      velocidad: '200 Mbps',
      precioInternet: '50.00',
      precioDuo: '90.00',
      caracteristicas: [
        'Fibra 100% simétrica', 
        'Router WiFi 6 de alta potencia', 
        'Soporte prioritario', 
        'Instalación gratuita',
        'Ping optimizado'
      ],
      destacado: true
    },
    {
      nombre: 'Gamer / Pro',
      velocidad: '500 Mbps',
      precioInternet: '70.00',
      precioDuo: '110.00',
      caracteristicas: [
        'Fibra 100% simétrica', 
        'Mesh WiFi 6 incluido', 
        'Soporte VIP', 
        'Instalación gratuita',
        'IP Pública opcional'
      ],
      destacado: false
    }
  ];

  cambiarServicio(tipo: 'internet' | 'duo') {
    this.tipoServicio = tipo; // Cambio directo y fluido sin bloqueos
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