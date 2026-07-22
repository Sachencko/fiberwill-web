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

  tipoServicio: 'internet' | 'duo' | 'cable' = 'internet';

  // ---> AQUÍ COLOCA TU NÚMERO DE WHATSAPP (con código de país, sin el símbolo +) <---
  // Ejemplo para Perú: '51987654321'
  numeroWhatsApp = '956302025'; 

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

  planCableUnico = {
    nombre: 'Televisión Digital',
    velocidad: '+100 Canales',
    precio: '40.00',
    caracteristicas: [
      'Más de 100 canales en definición HD',
      'Programación variada en familia',
      'Deportes, películas y infantiles',
      'Instalación sin costo en punto principal',
      'Señal digital estable',
      'instalación de 1 a 3 televisores sin costo adicional'
    ]
  };

  cambiarServicio(tipo: 'internet' | 'duo' | 'cable') {
    this.tipoServicio = tipo;
  }

  // Función que genera el enlace de WhatsApp con el mensaje del plan
  contratarPlan(nombrePlan: string, velocidad: string, precio: string, tipoServicioActual: string) {
    let descripcionServicio = '';
    
    if (tipoServicioActual === 'internet') {
      descripcionServicio = `Plan Solo Internet de ${velocidad}`;
    } else if (tipoServicioActual === 'duo') {
      descripcionServicio = `Plan Dúo (Internet ${velocidad} + Más de 100 canales HD)`;
    } else {
      descripcionServicio = `Plan Solo Cable (Televisión Digital +100 canales)`;
    }

    const mensaje = `¡Hola! Me interesa contratar el *${nombrePlan}* (${descripcionServicio}) por un precio de *S/ ${precio} al mes*. ¿Me brindan más información por favor?`;
    
    const urlWhatsApp = `https://wa.me/${this.numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abre WhatsApp en una pestaña nueva
    window.open(urlWhatsApp, '_blank');
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