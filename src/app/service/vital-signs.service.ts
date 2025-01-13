import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VitalSigns } from '../shared/components/models/VitalSigns';
import { NewVitalSigns } from '../shared/components/models/VitalSigns';

@Injectable({
  providedIn: 'root'
})
export class VitalSignsService {

  private apiUrl = 'https://qvtt1k0idc.execute-api.us-east-1.amazonaws.com/signosvitales';

  constructor(private http: HttpClient) { }

  getVitalSignsByPatientId(id: number): Observable<VitalSigns> {
    return this.http.get<VitalSigns>(`${this.apiUrl}/paciente/${id}`);
  }

  createVitalSigns(idPaciente: number, vitalSigns: NewVitalSigns): Observable<NewVitalSigns> {
    return this.http.post<NewVitalSigns>(`${this.apiUrl}/${idPaciente}`, vitalSigns);
  }

  updateVitalSigns(id: number, vitalSigns: VitalSigns): Observable<VitalSigns> {
    return this.http.put<VitalSigns>(`${this.apiUrl}/${id}`, vitalSigns);
  }

  getVitalSignsById(id: number): Observable<VitalSigns> {
    return this.http.get<VitalSigns>(`${this.apiUrl}/${id}`);
  }

}
