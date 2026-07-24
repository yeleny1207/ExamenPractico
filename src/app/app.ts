import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    InsertarUsuarioComponent, 
    ListarUsuariosComponent,
    BuscarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}