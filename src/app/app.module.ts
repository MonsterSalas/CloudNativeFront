import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalRedirectComponent, MsalGuardConfiguration, MsalInterceptorConfiguration, MsalBroadcastService, MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './core/interceptors/auth-interceptor.interceptor';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


export function MSALFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '458f5cde-53a8-48dd-a50e-1b4fddd80cf6',
      authority: 'https://login.microsoftonline.com/7345fdc5-f902-46fb-8808-4f86e747e2e8',
      redirectUri: 'http://localhost:4200'
    }
  }); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
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
