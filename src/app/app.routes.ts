import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Registro } from './auth/registro/registro';
import { Dashboard } from './estudiante/dashboard/dashboard';
import { Dashboard as DashboardAdmin } from './administrador/dashboard/dashboard';
import { Estudiantes } from './administrador/estudiantes/estudiantes';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'estudiante/dashboard', component: Dashboard },
  { path: 'administrador/dashboard', component: DashboardAdmin },
  { path: 'administrador/estudiantes', component: Estudiantes },
  { path: '**', redirectTo: 'login' }
];