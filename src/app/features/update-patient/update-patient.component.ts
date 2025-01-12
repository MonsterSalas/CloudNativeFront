import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from 'src/app/service/patients.service';
import { Patient } from 'src/app/shared/components/models/Patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private patientsService: PatientsService) { }

  patient: Patient = {
    id: 0,
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

  ngOnInit(): void {
    this.getPatientById();
  }

  getPatientById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.patientsService.getPatientById(id).subscribe(data => {
      this.patient = data;
    });
  }

  updatePatient(): void {
    this.patientsService.updatePatient(this.patient).subscribe(() => {
      this.router.navigate(['/patients']);
    });
  }
}