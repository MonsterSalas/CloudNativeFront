import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Patient } from 'src/app/shared/components/models/Patient';
import { PatientsService } from 'src/app/service/patients.service';
import { VitalSigns } from 'src/app/shared/components/models/VitalSigns';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.getPatients();
  };

  getPatients(): void {
    this.patientsService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este paciente?')) {
      this.patientsService.deletePatient(id).subscribe(() => {
        this.getPatients();
      });
    }
  }
  

}
