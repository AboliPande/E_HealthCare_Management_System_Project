import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorComponent } from '../doctor/doctor.component';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-view-all-doctors',
  templateUrl: './view-all-doctors.component.html',
  styleUrls: ['./view-all-doctors.component.css']
})
export class ViewAllDoctorsComponent {

  doctors: DoctorComponent[] | undefined;
  constructor(private router:Router,private serv:MyServiceService){

  }

  ngOnInit(){
    this.getDoctors();
  }

  private getDoctors(){
    this.serv.getAllDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

 /* allDoctors=[
    {
      doctor_id:1,
      doctor_name:'Aboli Pande',
      gender:'Female',
      specialist:'Allergist',
      address:'Nagpur',
      contact_no:1234567890,
      email_id:'aboli@gmail.com',
      username:'AboliPande'
    },
    {
      doctor_id:2,
      doctor_name:'Gauri Pande',
      gender:'Female',
      specialist:'Allergist',
      address:'Pune',
      contact_no:5678901234,
      email_id:'gauripande@gmail.com',
      username:'gauripande'
    },
    {
      doctor_id:3,
      doctor_name:'Yash Kolhatkar',
      gender:'Male',
      specialist:'Neurologist',
      address:'Mumbai',
      contact_no:2345678901,
      email_id:'yash@gmail.com',
      username:'yash'
    },
    {
      doctor_id:4,
      doctor_name:'Kaustubh Deshmukh',
      gender:'Male',
      specialist:'Neurologist',
      address:'Banglore',
      contact_no:3456789012,
      email_id:'kaustubh@gmail.com',
      username:'kaustubh'
    },
    {
      doctor_id:5,
      doctor_name:'Omkar Kulkarni',
      gender:'Male',
      specialist:'Cardiologist',
      address:'Hyderabad',
      contact_no:4567890123,
      email_id:'omkar@gmail.com',
      username:'omkar'
    }
  ]*/
  updateDoctor(id:number){
    this.router.navigate(['/admin/update-doctor',id]);
  }
  deleteDoctor(id:number){
    this.serv.deleteDoctor(id).subscribe( data => {
      console.log(data);
      this.getDoctors();
    })
  }
}
