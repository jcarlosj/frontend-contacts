import { Component } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.css'
})
export class PageContactComponent {
  registroCreado: any;

  onRegistroCreado(registro: any): void {
    console.log('Nuevo registro en PageContactComponent:', registro);
    this.registroCreado = registro;
  }
}
