import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  @Input() registro!: any; // Input property to receive records from the parent component
  registros: any[] = [];

  constructor(private dataService: DataService) { } // Inyectar servicio de datos

  ngOnInit(): void {
    this.cargarRegistros(); // Cargar registros al iniciar el componente
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( changes['registro'].currentValue );

    if (changes['registro'] && changes['registro'].currentValue) {
      this.registros.push(changes['registro'].currentValue.data);
    }
  }

  cargarRegistros(): void {
    this.dataService.obtenerRegistros().subscribe(data => {
      console.log( data );
      this.registros = data.data;
    });
  }

  editarRegistro(registro: any): void {
    // Implementar la lógica para cargar los datos del registro en el formulario reactivo
    console.log('Editar registro:', registro); // Mostrar el registro seleccionado
  }

  eliminarRegistro(registro: any): void {
    console.log('Eliminar registro:', registro); // Mostrar el registro seleccionado
    // this.dataService.eliminarRegistro(registro.id).subscribe(() => {
    //   this.cargarRegistros(); // Recargar la lista después de eliminar
    // });
  }
}
