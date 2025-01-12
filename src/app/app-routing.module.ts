import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { CustomMsalGuard } from './core/interceptors/msal.guard';
import { PatientsComponent } from './features/patients/patients.component';
import { PatientDetailComponent } from './features/patient-detail/patient-detail.component';
import { NewPatientComponent } from './features/new-patient/new-patient.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent, canActivate: [CustomMsalGuard] },
  { path: 'patient-detail', component: PatientDetailComponent, canActivate: [CustomMsalGuard] },
  { path: 'new-patient', component: NewPatientComponent, canActivate: [CustomMsalGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
