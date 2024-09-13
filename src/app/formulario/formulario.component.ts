import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  form = {
    nombre: '',
    fecha: '',
    tipoArchivo: '',
    carpeta: '',
    duenos: []
  };

  tiposArchivos = ['PDF', 'Word', 'Imagen'];
  carpetas = ['Carpeta1', 'Carpeta2'];
  duenos = ['Juan', 'Pedro'];

  agregarDueno() {
    const nuevoDueno = prompt('Ingrese el nombre del nuevo dueño');
    if (nuevoDueno) {
      this.duenos.push(nuevoDueno);
    }
  }

  onSubmit() {
    console.log(this.form);
    // Aquí puedes procesar el formulario
  }

  volver() {
 
  }

}
