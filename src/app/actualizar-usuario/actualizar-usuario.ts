import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipoService } from '../services/equipo';

@Component({
  selector: 'app-actualizar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-usuario.html',
  styleUrl: './actualizar-usuario.css'
})
export class ActualizarUsuarioComponent {
  codigo: string = '';
  nuevoEstado: string = 'Disponible';

  constructor(private equipoService: EquipoService) {}

  actualizar() {
    this.equipoService.actualizarEstado(this.codigo, this.nuevoEstado).subscribe({
      next: () => alert('Estado actualizado correctamente'),
      error: () => alert('Error al actualizar estado')
    });
  }
}