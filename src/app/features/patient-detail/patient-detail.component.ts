import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/components/models/Patient';
import { PatientsService } from 'src/app/service/patients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patient: Patient | null = null; // Declaración de la propiedad para almacenar los datos del paciente

  constructor(private patientsService: PatientsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertimos a número
      if (!isNaN(id)) {
        this.getPatientById(id);
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
}
