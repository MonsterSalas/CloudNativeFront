import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patients } from '../shared/components/models/Patient';
import { Patient } from '../shared/components/models/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiUrl = 'http://localhost:8080/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  createPatient(patient: Patients): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}`, patient);
  }

  updatePatient(id: number, patient: Patients): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${id}`);
  }

}
