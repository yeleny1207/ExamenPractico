import { Routes } from '@angular/router';
import { ListarUsuarios } from './listar-usuarios/listar-usuarios';
import { InsertarUsuario } from './insertar-usuario/insertar-usuario';
import { BuscarUsuario } from './buscar-usuario/buscar-usuario';
import { ActualizarUsuario } from './actualizar-usuario/actualizar-usuario';
import { MostrarUsuario } from './mostrar-usuario/mostrar-usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListarUsuarios },
  { path: 'insertar', component: InsertarUsuario },
  { path: 'buscar', component: BuscarUsuario },
  { path: 'actualizar', component: ActualizarUsuario },
  { path: 'mostrar', component: MostrarUsuario },
  { path: '**', redirectTo: 'listar' }
];