import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/components/models/Patient';
import { PatientsService } from 'src/app/service/patients.service';
import { VitalSignsService } from 'src/app/service/vital-signs.service';
import { VitalSigns } from 'src/app/shared/components/models/VitalSigns';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  vitalSignsMap: { [key: number]: VitalSigns } = {};
  constructor(private patientsService: PatientsService, private vitalSignsService: VitalSignsService) { }

  ngOnInit(): void {
    this.getPatients();
  };

  getPatients(): void {
    this.patientsService.getPatients().subscribe(data => {
      this.patients = data;
      for (let i = 0; i < this.patients.length; i++) {
        this.getVitalsignsByPatientId(this.patients[i].id);
      }
    });
  }

  deletePatient(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este paciente?')) {
      this.patientsService.deletePatient(id).subscribe(() => {
        this.getPatients();
      });
    }
  }

  getVitalsignsByPatientId(id: number): void {
    this.vitalSignsService.getVitalSignsByPatientId(id).subscribe({
      next: (data: any) => {
        console.log(`Signos vitales recibidos para paciente ${id}:`, data);
        // Asignar directamente el objeto de datos
        this.vitalSignsMap[id] = data;
        // Forzar detección de cambios
        console.log('VitalSignsMap actualizado:', this.vitalSignsMap);
      },
      error: (err) => {
        console.error(`Error al obtener signos vitales para paciente ${id}:`, err);
      }
    });
  }
}
