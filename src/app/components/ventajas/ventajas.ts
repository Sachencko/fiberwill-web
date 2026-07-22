import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventajas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventajas.html',
  styleUrl: './ventajas.scss'
})
export class VentajasComponent {
  @ViewChild('sectionRef') sectionRef!: ElementRef;
  isVisible = false;

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