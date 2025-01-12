import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
// Lista de pacientes simulada
pacientes = [
  { id: 1, nombre: 'Juan Pérez', genero: 'masculino', edad: 30 },
  { id: 2, nombre: 'María López', genero: 'femenino', edad: 25 },
  { id: 3, nombre: 'Carlos Gómez', genero: 'masculino', edad: 45 },
  { id: 4, nombre: 'Ana Torres', genero: 'femenino', edad: 60 }
];

constructor(private router: Router) { }

ngOnInit(): void {
  // Aquí puedes llamar a tu servicio para obtener los pacientes desde el backend
}

// Métodos para acciones
crearPaciente(): void {
  this.router.navigate(['/new-patient']);
}

verPaciente(id: number): void {
  this.router.navigate(['/patient-detail']);
}

editarPaciente(id: number): void {
  // Implementa la lógica para editar un paciente
  alert('Editar Paciente con ID: ' + id);
}

eliminarPaciente(id: number): void {
  // Implementa la lógica para eliminar un paciente
  const index = this.pacientes.findIndex(p => p.id === id);
  if (index !== -1) {
    this.pacientes.splice(index, 1);
  }
}
}
