export class Patient {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
  rut: string;
  fechaIngreso: Date;
  fechaNacimiento: Date;
  estadoPaciente: string;
  email: string;
  genero: string;
  telefono: string;

  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.edad = data.edad;
    this.direccion = data.direccion;
    this.rut = data.rut;
    this.fechaIngreso = data.fechaIngreso;
    this.fechaNacimiento = data.fechaNacimiento;
    this.estadoPaciente = data.estadoPaciente;
    this.email = data.email;
    this.genero = data.genero;
    this.telefono = data.telefono;
  }
}

export class NewPatient {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
  rut: string;
  fechaIngreso: Date;
  fechaNacimiento: Date;
  estadoPaciente: string;
  email: string;
  genero: string;
  telefono: string;

  constructor(data: any) {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.edad = data.edad;
      this.direccion = data.direccion;
      this.rut = data.rut;
      this.fechaIngreso = data.fechaIngreso;
      this.fechaNacimiento = data.fechaNacimiento;
      this.estadoPaciente = data.estadoPaciente;
      this.email = data.email;
      this.genero = data.genero;
      this.telefono = data.telefono;
  }
}