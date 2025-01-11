import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private msalService: MsalService) {}

  usuarioEstaConectado(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  cerrarSesion(): void {
    firstValueFrom(this.msalService.logoutPopup({
      mainWindowRedirectUri: "/"
    })).then(() => {
      window.location.reload();
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  }


}
