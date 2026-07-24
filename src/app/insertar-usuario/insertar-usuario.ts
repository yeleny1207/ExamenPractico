import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipoService, Equipo } from '../services/equipo';

@Component({
  selector: 'app-insertar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insertar-usuario.html',
  styleUrl: './insertar-usuario.css'
})
export class InsertarUsuarioComponent {
  nuevoEquipo: Equipo = {
    codigo: '',
    nombre: '',
    categoria: '',
    laboratorio: '',
    estado: 'Disponible',
    responsable: 'Evelyn Condoy'
  };

  constructor(private equipoService: EquipoService) {}

  guardar() {
    this.equipoService.registrarEquipo(this.nuevoEquipo).subscribe({
      next: () => {
        alert('Equipo registrado exitosamente');
        this.nuevoEquipo = { codigo: '', nombre: '', categoria: '', laboratorio: '', estado: 'Disponible', responsable: 'Evelyn Condoy' };
      },
      error: () => alert('Error al registrar el equipo')
    });
  }
}