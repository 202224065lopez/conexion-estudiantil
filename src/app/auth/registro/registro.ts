import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  aspirante = {
    nombres: '',
    apellidos: '',
    correo_electronico: '',
    telefono: '',
    carrera_id: '',
    contrasena: '',
    confirmar_contrasena: ''
  };

  carreras = [
    { id: '1', nombre: 'Ingeniería en Sistemas Computacionales' },
    { id: '2', nombre: 'Ingeniería Industrial' },
    { id: '3', nombre: 'Ingeniería Electromecánica' },
    { id: '4', nombre: 'Ingeniería en Administración' }
  ];

  registrar(): void {
    if (this.aspirante.contrasena !== this.aspirante.confirmar_contrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert('Formulario preparado. Próximamente conectaremos el registro con Django.');
    console.log(this.aspirante);
  }
}
