import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { DailyReportComponent } from './pages/daily-report/daily-report.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { DailyResultsComponent } from './pages/daily-results/daily-results.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'daily-report', component: DailyReportComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'daily-results', component: DailyResultsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
