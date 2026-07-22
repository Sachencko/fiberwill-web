import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { SobreNosotrosComponent } from './components/nosotros/nosotros';
import { IncidenciasComponent } from './components/incidencias/incidencias'; // <-- IMPORTAR COMPONENTE

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'incidencias', component: IncidenciasComponent }, // <-- NUEVA RUTA INDEPENDIENTE
  { path: '**', redirectTo: '' }
];