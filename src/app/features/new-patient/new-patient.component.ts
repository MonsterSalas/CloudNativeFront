import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../../service/patients.service';
import { NewPatient } from '../../shared/components/models/Patient';
@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent {
  patient: NewPatient = {
    nombre: '',
    apellido: '',
    rut: '',
    edad: 0,
    estadoPaciente: '',
    fechaNacimiento: new Date(),
    fechaIngreso: new Date(),
    genero: '',
    telefono: '',
    email: '',
    direccion: '',
  };

  constructor(private router: Router, private patientsService: PatientsService) { }

  createPatient(): void {
    this.patientsService.createPatient(this.patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }
}
