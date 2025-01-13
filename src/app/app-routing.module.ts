import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { CustomMsalGuard } from './core/interceptors/msal.guard';
import { PatientsComponent } from './features/patients/patients.component';
import { PatientDetailComponent } from './features/patient-detail/patient-detail.component';
import { NewPatientComponent } from './features/new-patient/new-patient.component';
import { UpdatePatientComponent } from './features/update-patient/update-patient.component';
import { UpdateVitalSingsComponent } from './features/update-vital-sings/update-vital-sings.component';
import { NewVitalSignsComponent } from './features/new-vital-signs/new-vital-signs.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent, canActivate: [CustomMsalGuard] },
  { path: 'patient-detail/:id', component: PatientDetailComponent, canActivate: [CustomMsalGuard] },
  { path: 'new-patient', component: NewPatientComponent, canActivate: [CustomMsalGuard] },
  { path: 'update-patient/:id', component: UpdatePatientComponent, canActivate: [CustomMsalGuard] },
  { path: 'update-vital-sings/:id', component: UpdateVitalSingsComponent, canActivate: [CustomMsalGuard] },
  { path: 'new-vital-signs/:id', component: NewVitalSignsComponent, canActivate: [CustomMsalGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
