import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/components/models/Patient';
import { PatientsService } from 'src/app/service/patients.service';

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
