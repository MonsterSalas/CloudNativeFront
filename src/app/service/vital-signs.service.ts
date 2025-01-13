import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VitalSigns } from '../shared/components/models/VitalSigns';

@Injectable({
  providedIn: 'root'
})
export class VitalSignsService {

  private apiUrl = 'http://localhost:8080/back/signosvitales';

  constructor(private http: HttpClient) { }


  getAllVitalSigns(): Observable<VitalSigns[]> {
    return this.http.get<VitalSigns[]>(`${this.apiUrl}`);
  }

  getVitalSignsById(id: number): Observable<VitalSigns> {
    return this.http.get<VitalSigns>(`${this.apiUrl}/${id}`);
  }

  createVitalSigns(vitalSigns: VitalSigns): Observable<VitalSigns> {
    return this.http.post<VitalSigns>(`${this.apiUrl}`, vitalSigns);
  }

  updateVitalSigns(id: number, vitalSigns: VitalSigns): Observable<VitalSigns> {
    return this.http.put<VitalSigns>(`${this.apiUrl}/${id}`, vitalSigns);
  }

  deleteVitalSigns(id: number): Observable<VitalSigns> {
    return this.http.delete<VitalSigns>(`${this.apiUrl}/${id}`);
  }

  getVitalSignsByPatientId(id: number): Observable<VitalSigns> {  // Ya no es VitalSigns[]
    return this.http.get<VitalSigns>(`${this.apiUrl}/paciente/${id}`);
}

}
