import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipoService, Equipo } from '../services/equipo';

@Component({
  selector: 'app-buscar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-usuario.html',
  styleUrl: './buscar-usuario.css'
})
export class BuscarUsuario {
  codigoBusq: string = '';
  equipoEncontrado: Equipo | null = null;

  constructor(private equipoService: EquipoService) {}

  buscar() {
    if (!this.codigoBusq.trim()) return;
    this.equipoService.getEquipoByCodigo(this.codigoBusq).subscribe({
      next: (data) => this.equipoEncontrado = data,
      error: () => {
        alert('Equipo no encontrado');
        this.equipoEncontrado = null;
      }
    });
  }
}