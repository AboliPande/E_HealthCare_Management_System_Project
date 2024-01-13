import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  template: `
    <p>
      doctor works!
    </p>
  `,
  styles: [
  ]
})
export class DoctorComponent {
    doctor_id: number=1;
    doctor_name: string='';
    gender: string='';
    specialist: string='';
    address: string='';
    contact_no: string='';
    email_id: string='';
    password: string='';
}