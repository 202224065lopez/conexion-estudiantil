import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-administrador',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  nombreAdministrador = 'Administrador';

  estadisticas = [
    { icono: '👨‍🎓', titulo: 'Estudiantes registrados', valor: '250', color: 'azul' },
    { icono: '📝', titulo: 'Inscripciones pendientes', valor: '35', color: 'verde' },
    { icono: '⚠️', titulo: 'Alertas de seguimiento', valor: '12', color: 'naranja' },
    { icono: '🧠', titulo: 'Evaluaciones realizadas', valor: '180', color: 'morado' }
  ];

  actividades = [
    { estudiante: 'María López', actividad: 'Registro de estudiante', fecha: '09/11/2026', estado: 'Completado' },
    { estudiante: 'Carlos Hernández', actividad: 'Evaluación vocacional', fecha: '09/11/2026', estado: 'Pendiente' },
    { estudiante: 'Ana Martínez', actividad: 'Seguimiento académico', fecha: '08/11/2026', estado: 'En revisión' },
    { estudiante: 'José Ramírez', actividad: 'Solicitud de apoyo', fecha: '08/11/2026', estado: 'Pendiente' }
  ];
}