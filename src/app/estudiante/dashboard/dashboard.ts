import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-estudiante',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  nombreEstudiante = 'Estudiante';
  carrera = 'Ingeniería en Sistemas Computacionales';
  matricula = 'Pendiente de asignación';

  notificaciones = [
    'Recuerda completar tu evaluación vocacional.',
    'Consulta las próximas actividades académicas.',
    'Mantén actualizada tu información personal.'
  ];

  accesos = [
    { icono: '🧠', titulo: 'Test vocacional', descripcion: 'Conoce tus intereses profesionales' },
    { icono: '🤝', titulo: 'Solicitar apoyo', descripcion: 'Comunícate con la institución' }
  ];

}
