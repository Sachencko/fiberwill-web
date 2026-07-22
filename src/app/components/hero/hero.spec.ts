import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  publicidades = [ /* ... tus datos aquí ... */ ];
  slideActual = 0;
  
  // Variables nuevas para controlar el bug y el autoplay
  isAnimating = false;
  autoPlayInterval: any;

  // Se ejecuta al cargar la página
  ngOnInit() {
    this.iniciarAutoPlay();
  }

  // Se ejecuta si cambias de página para no dejar procesos corriendo
  ngOnDestroy() {
    this.detenerAutoPlay();
  }

  iniciarAutoPlay() {
    // Cambia de imagen automáticamente cada 5 segundos (5000ms)
    this.autoPlayInterval = setInterval(() => {
      this.siguiente();
    }, 5000);
  }

  detenerAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  reiniciarAutoPlay() {
    // Si el usuario hace clic, reiniciamos el contador de 5 segundos
    this.detenerAutoPlay();
    this.iniciarAutoPlay();
  }

  siguiente() {
    // Si ya se está moviendo, ignora el clic (¡Adiós bug!)
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    // Lógica para volver al inicio si llega al final
    this.slideActual = (this.slideActual === this.publicidades.length - 1) ? 0 : this.slideActual + 1;
    this.reiniciarAutoPlay();

    // Desbloquea los clics después de 700ms
    setTimeout(() => {
      this.isAnimating = false;
    }, 700);
  }

  anterior() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    // Lógica para ir al final si retrocede estando en la primera
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