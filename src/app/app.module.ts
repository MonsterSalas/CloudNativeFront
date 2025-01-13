import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalRedirectComponent, MsalGuardConfiguration, MsalInterceptorConfiguration, MsalBroadcastService, MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './core/interceptors/auth-interceptor.interceptor';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PatientsComponent } from './features/patients/patients.component';
import { PatientDetailComponent } from './features/patient-detail/patient-detail.component';
import { NewPatientComponent } from './features/new-patient/new-patient.component';
import { UpdatePatientComponent } from './features/update-patient/update-patient.component';
import { UpdateVitalSingsComponent } from './features/update-vital-sings/update-vital-sings.component';


export function MSALFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      //Salas
      clientId: '458f5cde-53a8-48dd-a50e-1b4fddd80cf6',
      authority: 'https://login.microsoftonline.com/7345fdc5-f902-46fb-8808-4f86e747e2e8',

      //Carlos
      //clientId: '60afa611-af86-4657-a32c-b22c6727c9c3', // Aplicación
      //authority: 'https://login.microsoftonline.com/29032863-5528-4522-9b96-00b895869533', // Inquilino

      redirectUri: 'http://localhost:4200'
    }
  }); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PatientsComponent,
    PatientDetailComponent,
    NewPatientComponent,
    UpdatePatientComponent,
    UpdateVitalSingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALFactory
    },
    MsalService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
