import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientClassComponent } from './patient-class/patient-class.component';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseURL = "http://localhost:8080/api/v1/doctors";
  private baseURL1 = "http://localhost:8080/api/v1/patients";
  constructor(private httpClient:HttpClient) { }

  getAllDoctors():Observable<DoctorComponent[]>{
    return this.httpClient.get<DoctorComponent[]>(`${this.baseURL}`);
  }

  getDoctorById(id: number): Observable<DoctorComponent>{
    return this.httpClient.get<DoctorComponent>(`${this.baseURL}/${id}`);
  }

  deleteDoctor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  createDoctor(doctor:DoctorComponent): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }

  updateDoctor(id: number, doctor: DoctorComponent): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,doctor);
  }

  createPatient(patient:PatientClassComponent): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, patient);
  }
  getAllPatients():Observable<PatientClassComponent[]>{
    return this.httpClient.get<PatientClassComponent[]>(`${this.baseURL1}`);
  }

  getPatientById(id: number): Observable<PatientClassComponent>{
    return this.httpClient.get<PatientClassComponent>(`${this.baseURL1}/${id}`);
  }

  deletePatient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL1}/${id}`);
  }
  updatePatientById(id: number, patient: PatientClassComponent): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${id}`,patient);
  }
}