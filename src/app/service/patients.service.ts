import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../shared/components/models/Patient';
import { NewPatient } from '../shared/components/models/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiUrl = 'http://localhost:8080/back/pacientes';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  createPatient(patient: NewPatient): Observable<NewPatient> {
    console.log(patient);
    return this.http.post<NewPatient>(`${this.apiUrl}`, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl, patient);
  }

  deletePatient(id: number): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${id}`);
  }

}
