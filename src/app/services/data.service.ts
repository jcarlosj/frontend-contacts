import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private registros: any[] = []; // Array privado para almacenar registros
  registroCreado = new EventEmitter<any>(); // Evento para notificar la creación de un registro

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  obtenerRegistros(): Observable<any[]> {
    // Implementar la lógica para obtener registros desde una API o base de datos
    // Ejemplo:
    return this.http.get<any>('/api/registros');
  }

  guardarRegistro(registro: any): Observable<any> {
    // Implementar la lógica para guardar un registro en una API o base de datos
    // Ejemplo:
    return this.http.post('/api/registros', registro);
  }

  eliminarRegistro(id: any): Observable<any> {
    // Implementar la lógica para eliminar un registro en una API o base de datos
    // Ejemplo:
    return this.http.delete(`/api/registros/${id}`);
  }
}
