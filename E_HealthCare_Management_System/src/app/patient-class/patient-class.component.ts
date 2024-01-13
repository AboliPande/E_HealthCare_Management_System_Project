import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-class',
  template: `
    <p>
      patient-class works!
    </p>
  `,
  styles: [
  ]
})
export class PatientClassComponent {
  patient_id: number =0;
    patient_name: string='';
    gender: string='';
    address: string='';
    contact_no: string='';
    email_id: string='';
    password: string='';
    app_date: Date=new Date();
    payment: number=0;
}