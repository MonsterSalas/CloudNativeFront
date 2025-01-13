import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VitalSigns } from 'src/app/shared/components/models/VitalSigns';
import { VitalSignsService } from 'src/app/service/vital-signs.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-vital-sings',
  templateUrl: './update-vital-sings.component.html',
  styleUrls: ['./update-vital-sings.component.css']
})
export class UpdateVitalSingsComponent {

  constructor(private route: ActivatedRoute,private location: Location, private router: Router, private vitalSignsService: VitalSignsService) { }


  ngOnInit(): void {
    this.getVitalSignsById();
  }

  vitalSigns : VitalSigns ={
    id: 0,
    idPaciente: 0,
    fechaRegistro: new Date(),
    temperatura: 0,
    frecuenciaCardiaca: 0,
    presionArterial: 0,
    saturacionOxigeno: 0,
  };


  getVitalSignsById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vitalSignsService.getVitalSignsById(id).subscribe(data => {
      this.vitalSigns = data;
    });
  }

  updateVitalSigns(): void {
    this.vitalSignsService.updateVitalSigns(this.vitalSigns.id, this.vitalSigns).subscribe(() => {
      this.location.back(); // Esto te llevará a la página anterior
    });
  }

}
