import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planes',
  standalone: true,
  templateUrl: './planes.html',
  styleUrl: './planes.scss'
})
export class PlanesComponent {
  @ViewChild('sectionRef') sectionRef!: ElementRef;
  
  // Controla si la sección ya es visible en pantalla
  isVisible = false;

  planes = [
    {
      nombre: 'Básico',
      velocidad: '100 Mbps',
      precio: '60.00',
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
      velocidad: '300 Mbps',
      precio: '90.00',
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
      velocidad: '600 Mbps',
      precio: '140.00',
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

  // Detectamos cada vez que el usuario hace scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si ya se activó una vez, no necesitamos seguir evaluando
    if (this.isVisible) return;

    if (this.sectionRef) {
      const rect = this.sectionRef.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Si la parte superior de la sección está cerca o dentro de la pantalla visible...
      if (rect.top <= windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}