import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { SobreNosotrosComponent } from './components/nosotros/nosotros';

export const routes: Routes = [
  { path: '', component: HomeComponent },          // Ruta para la página de inicio
  { path: 'sobre-nosotros', component: SobreNosotrosComponent }, // Ruta independiente
  { path: '**', redirectTo: '' }                   // Redirección si escriben cualquier otra cosa
];