import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../shared/components/models/Patient';
import { NewPatient } from '../shared/components/models/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiUrl = 'https://qvtt1k0idc.execute-api.us-east-1.amazonaws.com/pacientes';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  createPatient(patient: NewPatient): Observable<NewPatient> {
    return this.http.post<NewPatient>(`${this.apiUrl}`, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${patient.id}`, patient);
  }

  deletePatient(id: number): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${id}`);
  }
}
