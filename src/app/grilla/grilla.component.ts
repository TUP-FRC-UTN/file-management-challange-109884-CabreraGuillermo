import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grilla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grilla.component.html',
  styleUrl: './grilla.component.css'
})
export class GrillaComponent {

  items = [
    { nombre: 'Archivo1', fecha: new Date(), duenos: 'Juan, Pedro' },
    // Agrega más items según necesites
  ];


  irANuevo() {
    
  }

}
