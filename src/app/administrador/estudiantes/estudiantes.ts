import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class Estudiantes {

  busqueda = '';
  mostrarFormulario = false;

  nuevoEstudiante = {
    matricula: '',
    nombre: '',
    correo: '',
    carrera: '',
    estatus: 'Activo'
  };

  estudiantes = [
    {
      matricula: '2024001',
      nombre: 'María López García',
      correo: 'maria@tescha.edu.mx',
      carrera: 'Ingeniería en Sistemas Computacionales',
      estatus: 'Activo'
    },
    {
      matricula: '2024002',
      nombre: 'Carlos Hernández',
      correo: 'carlos@tescha.edu.mx',
      carrera: 'Ingeniería Industrial',
      estatus: 'Activo'
    },
    {
      matricula: '2024003',
      nombre: 'Ana Martínez',
      correo: 'ana@tescha.edu.mx',
      carrera: 'Ingeniería en Administración',
      estatus: 'Pendiente'
    },
    {
      matricula: '2024004',
      nombre: 'José Ramírez',
      correo: 'jose@tescha.edu.mx',
      carrera: 'Ingeniería Electromecánica',
      estatus: 'Activo'
    }
  ];

  get estudiantesFiltrados() {
    const texto = this.busqueda.toLowerCase().trim();

    return this.estudiantes.filter(estudiante =>
      estudiante.nombre.toLowerCase().includes(texto) ||
      estudiante.matricula.toLowerCase().includes(texto) ||
      estudiante.carrera.toLowerCase().includes(texto)
    );
  }

  guardarEstudiante(): void {
    if (
      !this.nuevoEstudiante.matricula ||
      !this.nuevoEstudiante.nombre ||
      !this.nuevoEstudiante.correo ||
      !this.nuevoEstudiante.carrera
    ) {
      alert('Completa todos los campos.');
      return;
    }

    const existe = this.estudiantes.some(
      estudiante => estudiante.matricula === this.nuevoEstudiante.matricula
    );

    if (existe) {
      alert('La matrícula ya está registrada.');
      return;
    }

    this.estudiantes.push({ ...this.nuevoEstudiante });

    this.nuevoEstudiante = {
      matricula: '',
      nombre: '',
      correo: '',
      carrera: '',
      estatus: 'Activo'
    };

    this.mostrarFormulario = false;
    alert('Estudiante agregado correctamente.');
  }
}
