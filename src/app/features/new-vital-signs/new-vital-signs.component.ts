import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VitalSignsService } from '../../service/vital-signs.service';
import { NewVitalSigns } from '../../shared/components/models/VitalSigns';

@Component({
  selector: 'app-new-vital-signs',
  templateUrl: './new-vital-signs.component.html',
  styleUrls: ['./new-vital-signs.component.css']
})
export class NewVitalSignsComponent {
  
  vitalSigns: NewVitalSigns = {
    fechaRegistro: new Date(),
    temperatura: 0,
    frecuenciaCardiaca: 0,
    saturacionOxigeno: 0,
    presionArterial: 0,
    idPaciente: 0
  };

  constructor(private router: Router, private vitalSignsService: VitalSignsService) { }

  //NgOnInit para obtener el id del paciente desde los parametros de la URL
  ngOnInit(): void {
    this.vitalSigns.idPaciente = Number(this.router.url.split('/')[2]);
  }

  createVitalSigns(): void {
    this.vitalSignsService.createVitalSigns(this.vitalSigns.idPaciente, this.vitalSigns).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }

}
