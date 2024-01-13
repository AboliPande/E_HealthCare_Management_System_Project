import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientClassComponent } from '../patient-class/patient-class.component';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.css']
})
export class ViewAllPatientsComponent {

  patients: PatientClassComponent[] | undefined 
  constructor(private router:Router,private serv:MyServiceService){

  }

  ngOnInit(){
    this.getPatients();
  }

  private getPatients(){
    this.serv.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  /*allPatients=[
    {
      patient_id:1,
      patient_name:'Aboli Pande',
      gender:'Female',
      dob:'22/12/1999',
      address:'Pune',
      contact_no:'2345678901',
      email_id:'aboli@gmail.com',
      username:'AboliPande'
    },
    {
      patient_id:2,
      patient_name:'Gauri Pande',
      gender:'Female',
      dob:'23/03/2001',
      address:'Mumbai',
      contact_no:'5678901234',
      email_id:'gauripande@gmail.com',
      username:'gauripande'
    },
    {
      patient_id:3,
      patient_name:'Yash Kolhatkar',
      gender:'Male',
      dob:'13/4/2006',
      address:'Mumbai',
      contact_no:'2366678901',
      email_id:'yash@gmail.com',
      username:'yash'
    },
    {
      patient_id:4,
      patient_name:'Kaustubh Deshmukh',
      gender:'Male',
      dob:'31/4/2006',
      address:'Banglore',
      contact_no:'3413789012',
      email_id:'kaustubh@gmail.com',
      username:'kaustubh'
    },
    {
      patient_id:5,
      patient_name:'Omkar Kulkarni',
      gender:'Male',
      dob:'12/12/2003',
      address:'Hyderabad',
      contact_no:'4565490123',
      email_id:'omkar@gmail.com',
      username:'omkar'
    }
  ]*/

  updatePatient(id:number){
    this.router.navigate(['/admin/update-patient',id]);
  }
  deletePatient(id:number){
    this.serv.deletePatient(id).subscribe( data => {
      console.log(data);
      this.getPatients();
    })
  }

  viewPatients(id:number){
      
  }
}
