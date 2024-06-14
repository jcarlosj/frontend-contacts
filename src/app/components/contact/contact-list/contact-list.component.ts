import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  registros: any[] = []; // Array para almacenar registros

  constructor(private dataService: DataService) { } // Inyectar servicio de datos

  ngOnInit(): void {
    this.cargarRegistros(); // Cargar registros al iniciar el componente
  }

  cargarRegistros(): void {
    this.dataService.obtenerRegistros().subscribe(registros => {
      this.registros = registros;
    });
  }

  editarRegistro(registro: any): void {
    // Implementar la lógica para cargar los datos del registro en el formulario reactivo
    console.log('Editar registro:', registro); // Mostrar el registro seleccionado
  }

  eliminarRegistro(registro: any): void {
    this.dataService.eliminarRegistro(registro.id).subscribe(() => {
      this.cargarRegistros(); // Recargar la lista después de eliminar
    });
  }
}
