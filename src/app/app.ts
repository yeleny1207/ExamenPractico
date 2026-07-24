import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertarUsuario} from './insertar-usuario/insertar-usuario';
import { ListarUsuarios } from './listar-usuarios/listar-usuarios';
import { BuscarUsuario } from './buscar-usuario/buscar-usuario';
import { ActualizarUsuario } from './actualizar-usuario/actualizar-usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    InsertarUsuario, 
    ListarUsuarios,
    BuscarUsuario,
    ActualizarUsuario
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}