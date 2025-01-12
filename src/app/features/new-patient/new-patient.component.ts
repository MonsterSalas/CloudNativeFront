import { Component } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent {
  paciente = {
    nombre: '',
    rut: '',
    edad: null,
    genero: '',
    telefono: '',
    email: '',
    direccion: '',
  };

  crearPaciente() {
    console.log('Paciente creado:', this.paciente);
    // Aquí puedes agregar la lógica para enviar los datos al backend.
  }
}
