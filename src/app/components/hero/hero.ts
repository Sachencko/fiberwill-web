import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html', // o hero.component.html
})
export class HeroComponent implements OnInit {
  
  // 💡 TAMAÑO RECOMENDADO PARA LAS IMÁGENES: 
  // Resolución: 1920 x 1080 píxeles (Formato horizontal / panorámico).
  // Formato: .jpg o .webp (Para que pesen menos de 500kb y la página cargue rápido).
  // ¿Dónde guardarlas?: Debes pegar tus imágenes en la carpeta "src/assets/" de tu proyecto.

  publicidades = [
    {
      id: 1,
      imagen: 'assets/banner1.jpg', // <- Aquí pondrás el nombre de tu primera imagen
      titulo: 'Velocidad sin límites.',
      resaltado: 'Fibra Óptica Real.',
      descripcion: 'Conecta tu hogar o negocio en Chincha Alta y Sunampe con la red más estable. Juega y trabaja sin interrupciones.',
      boton: 'Ver Planes'
    },
    {
      id: 2,
      imagen: 'assets/banner2.jpg', // <- Tu segunda imagen
      titulo: 'Cámbiate a FiberWill.',
      resaltado: 'Instalación Gratis.',
      descripcion: 'Promoción exclusiva. Disfruta de la mejor cobertura y soporte técnico especializado sin pagar costo de instalación.',
      boton: 'Solicitar Promoción'
    },
    {
      id: 3,
      imagen: 'assets/banner3.jpg', // <- Tu tercera imagen
      titulo: 'Para los más exigentes.',
      resaltado: 'Planes Gamer Pro.',
      descripcion: 'Ping ultrabajo para tus partidas online y descargas masivas en segundos. Lleva tu setup al siguiente nivel.',
      boton: 'Consultar cobertura'
    }
  ];

  slideActual = 0;

  ngOnInit() {
    // Sigue girando automáticamente cada 5 segundos
    setInterval(() => {
      this.siguiente();
    }, 5000);
  }

  siguiente() {
    // Siempre avanza al siguiente. Si llega al último, vuelve al primero.
    this.slideActual = (this.slideActual === this.publicidades.length - 1) ? 0 : this.slideActual + 1;
  }

  irA(index: number) {
    this.slideActual = index;
  }
}