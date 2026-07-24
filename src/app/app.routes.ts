import { Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'buscar', component: BuscarUsuarioComponent },
  { path: 'insertar', component: InsertarUsuarioComponent },
  { path: 'listar', component: ListarUsuariosComponent },
  { path: 'actualizar', component: ActualizarUsuarioComponent },
];
