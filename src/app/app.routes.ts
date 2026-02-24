import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login';
// import { RegisterComponent } from './modules/auth/register/register';
import { DashboardComponent } from './modules/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
];
