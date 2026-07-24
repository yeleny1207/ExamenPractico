import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { InsertarUsuario } from './insertar-usuario/insertar-usuario';
import { ListarUsuarios } from './listar-usuarios/listar-usuarios';
import { BuscarUsuario } from './buscar-usuario/buscar-usuario';
import { ActualizarUsuario } from './actualizar-usuario/actualizar-usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    InsertarUsuario,
    ListarUsuarios,
    BuscarUsuario,
    ActualizarUsuario
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  totalEquipos: number = 0;

  ngOnInit(): void {
    this.actualizarContador();
   
    setInterval(() => {
      this.actualizarContador();
    }, 1000);
  }

  actualizarContador() {
    const cachedData = localStorage.getItem('equipos_cache');
    if (cachedData) {
      try {
        const equipos = JSON.parse(cachedData);
        this.totalEquipos = Array.isArray(equipos) ? equipos.length : 0;
      } catch (e) {
        this.totalEquipos = 0;
      }
    }
  }
}