import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- NECESARIO

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink], // <-- AÑÁDELOS AQUÍ
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {}