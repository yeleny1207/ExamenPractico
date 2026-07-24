import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipo {
  codigo: string;
  nombre: string;
  categoria: string;
  laboratorio: string;
  estado: string;
  responsable: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.apiUrl}/equipos`);
  }

  getEquipoByCodigo(codigo: string): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.apiUrl}/equipos/${codigo}`);
  }

  registrarEquipo(equipo: Equipo): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertarEquipo`, equipo, { responseType: 'text' });
  }

  actualizarEstado(codigo: string, estado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/actualizarEstado/${codigo}`, { estado }, { responseType: 'text' });
  }
}