import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  registroForm!: FormGroup; // Crear formulario reactivo

  constructor(private dataService: DataService) { } // Inyectar servicio de datos

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(): void {
    const datos = this.registroForm.value; // Obtener valores del formulario
    this.dataService.guardarRegistro(datos); // Guardar datos usando el servicio de datos
    this.registroForm.reset(); // Limpiar el formulario
  }
}

