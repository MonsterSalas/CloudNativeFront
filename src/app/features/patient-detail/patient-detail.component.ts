import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/components/models/Patient';
import { PatientsService } from 'src/app/service/patients.service';
import { ActivatedRoute } from '@angular/router';
import { VitalSignsService } from 'src/app/service/vital-signs.service';
import { VitalSigns } from 'src/app/shared/components/models/VitalSigns';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patient: Patient | null = null; // Declaración de la propiedad para almacenar los datos del paciente
  vitalSigns: VitalSigns | null = null;  // Inicializamos como array vacío
  constructor(private patientsService: PatientsService, private vitalSignsService: VitalSignsService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (!isNaN(id)) {
        this.getPatientById(id);
        // También obtener los signos vitales
        this.getVitalsignsByPatientId(id);
      } else {
        console.error('ID inválido:', params['id']);
      }
    });
  }

  getPatientById(id: number): void {
    this.patientsService.getPatientById(id).subscribe({
      next: (data) => {
        this.patient = data; // Asignamos los datos del paciente
      },
      error: (err) => {
        console.error('Error al obtener los datos del paciente:', err);
      }
    });
  }

  getVitalsignsByPatientId(id: number): void {
    this.vitalSignsService.getVitalSignsByPatientId(id).subscribe({
      next: (data: VitalSigns) => {
        this.vitalSigns = data;
        console.log('Signos vitales:', data);
      },
      error: (err) => {
        console.error('Error al obtener los signos vitales del paciente:', err);
      }
    });
  }

}
