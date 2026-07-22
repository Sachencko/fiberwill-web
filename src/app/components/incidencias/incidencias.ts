import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer'; // <-- IMPORTAR FOOTER

@Component({
  selector: 'app-incidencias',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent], // <-- AÑADIR A IMPORTS
  templateUrl: './incidencias.html',
  styles: ``
})
export class IncidenciasComponent {
  reporte = {
    nombres: '',
    apellidos: '',
    lugar: '',
    dni: '',
    telefono: '',
    motivo: 'Señal de internet baja',
    otroMotivo: ''
  };

  enviadoExitosamente = false;
  cargando = false;

  enviarReporte() {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
      this.enviadoExitosamente = true;
      console.log('Incidencia registrada:', this.reporte);
      
      setTimeout(() => {
        this.enviadoExitosamente = false;
      }, 5000);

      this.reporte = {
        nombres: '',
        apellidos: '',
        lugar: '',
        dni: '',
        telefono: '',
        motivo: 'Señal de internet baja',
        otroMotivo: ''
      };
    }, 1000);
  }
}