import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8283/api/v1/patient"; // Corrected variable name

  getPatientsList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }


  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);

  }

  creatPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}`,patient);
    
  }
  

}
