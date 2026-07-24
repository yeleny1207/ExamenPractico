import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipo, EquipoService } from '../services/equipo';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-usuarios.html',
  styleUrl: './listar-usuarios.css'
})
export class ListarUsuarios implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe({
      next: (data) => {
        this.equipos = data;
        // Guarda la última información consultada para el modo offline
        localStorage.setItem('equipos_cache', JSON.stringify(data));
      },
      error: () => {
        // Recupera del LocalStorage cuando no haya conexión a internet
        const cachedData = localStorage.getItem('equipos_cache');
        if (cachedData) {
          this.equipos = JSON.parse(cachedData);
        }
      }
    });
  }
}