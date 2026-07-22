import { Component, OnDestroy, ChangeDetectorRef, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnDestroy {
  publicidades = [
    {
      id: 1,
      imagen: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      titulo: 'Conexión a la velocidad de',
      resaltado: 'la luz',
      descripcion: 'Disfruta de la mejor experiencia de navegación con nuestra fibra óptica simétrica. Sin cortes, sin lag, solo velocidad pura.',
      boton: 'Descubrir Planes'
    },
    {
    id: 2,
    titulo: 'Entretenimiento total',
    resaltado: 'Más de 100 Canales en Familia',
    descripcion: 'Disfruta de la mejor programación HD, películas y deportes para todos en casa.',
    boton: 'Descubrir Planes',
    imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1920&auto=format&fit=crop'
  },
    {
      id: 3,
      imagen: 'https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=2028&auto=format&fit=crop',
      titulo: 'El internet perfecto para',
      resaltado: 'Gamers',
      descripcion: 'Ping bajo y estabilidad absoluta para tus partidas competitivas. Que tu internet no sea la excusa para perder.',
      boton: 'Ver Cobertura'
    },
    {
      id: 4,
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop',
      titulo: 'Trabaja desde casa sin',
      resaltado: 'interrupciones',
      descripcion: 'Videollamadas fluidas y descargas instantáneas. Lleva el internet de tu oficina directamente a tu hogar.',
      boton: 'Contratar Ahora'
    }
  ];

  slideActual = 0;
  isAnimating = false;
  autoPlayInterval: any;

  // Inyectamos el detector de cambios
  constructor(private cdr: ChangeDetectorRef) {
    // Esta es la forma moderna de Angular 17+ para ejecutar código solo en el navegador
    afterNextRender(() => {
      this.iniciarAutoPlay();
    });
  }

  ngOnDestroy() {
    this.detenerAutoPlay();
  }

  iniciarAutoPlay() {
    this.detenerAutoPlay(); // Limpiamos por si acaso hay un timer "fantasma" previo
    
    this.autoPlayInterval = setInterval(() => {
      console.log('⏱️ Han pasado 7 segundos, forzando el cambio de imagen...');
      this.siguiente();
      
      // OBLIGAMOS a Angular a actualizar la pantalla
      this.cdr.detectChanges(); 
    }, 7000);
  }

  detenerAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  reiniciarAutoPlay() {
    this.detenerAutoPlay();
    this.iniciarAutoPlay();
  }

  siguiente() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    this.slideActual = (this.slideActual === this.publicidades.length - 1) ? 0 : this.slideActual + 1;
    this.reiniciarAutoPlay();

    setTimeout(() => {
      this.isAnimating = false;
    }, 700);
  }

  anterior() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    this.slideActual = (this.slideActual === 0) ? this.publicidades.length - 1 : this.slideActual - 1;
    this.reiniciarAutoPlay();

    setTimeout(() => {
      this.isAnimating = false;
    }, 700);
  }

  irA(index: number) {
    if (this.isAnimating || this.slideActual === index) return;
    
    this.isAnimating = true;
    this.slideActual = index;
    this.reiniciarAutoPlay();

    setTimeout(() => {
      this.isAnimating = false;
    }, 700);
  }
}