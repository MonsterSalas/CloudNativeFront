import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VitalSigns } from 'src/app/shared/components/models/VitalSigns';
import { VitalSignsService } from 'src/app/service/vital-signs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-vital-sings',
  templateUrl: './update-vital-sings.component.html',
  styleUrls: ['./update-vital-sings.component.css']
})
export class UpdateVitalSingsComponent implements OnInit {
  vitalSigns: VitalSigns = {
    id: 0,
    idPaciente: 0,
    fechaRegistro: new Date(),
    temperatura: 0,
    frecuenciaCardiaca: 0,
    presionArterial: 0,
    saturacionOxigeno: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private vitalSignsService: VitalSignsService
  ) { }

  ngOnInit(): void {
    this.getVitalSignsById();
  }

  getVitalSignsById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vitalSignsService.getVitalSignsById(id).subscribe({
      next: (data: VitalSigns | null) => {
        if (data) {
          this.vitalSigns = data;
        } else {
          console.error('No se encontraron signos vitales con ese ID');
          // Opcional: redirigir al usuario o mostrar un mensaje
          this.location.back();
        }
      },
      error: (error) => {
        console.error('Error al obtener los signos vitales:', error);
        this.location.back();
      }
    });
  }

  updateVitalSigns(): void {
    if (this.vitalSigns.id) {
      this.vitalSignsService.updateVitalSigns(this.vitalSigns.id, this.vitalSigns).subscribe({
        next: () => {
          this.location.back();
        },
        error: (error) => {
          console.error('Error al actualizar los signos vitales:', error);
        }
      });
    }
  }
}