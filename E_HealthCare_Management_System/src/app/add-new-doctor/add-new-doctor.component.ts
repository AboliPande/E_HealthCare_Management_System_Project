import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorComponent } from '../doctor/doctor.component';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-add-new-doctor',
  templateUrl: './add-new-doctor.component.html',
  styleUrls: ['./add-new-doctor.component.css']
})
export class AddNewDoctorComponent {
  doctor: DoctorComponent = new DoctorComponent();
  constructor(private serv: MyServiceService,private router: Router) { }

  isLoading:boolean | undefined;

  addDoctorForm=new FormGroup({
    doctor_id:new FormControl('',[Validators.required]),
    doctor_name:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z ]*$')]),
    gender:new FormControl('',[Validators.required]),
    specialist:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    contact_no:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]),
    email_id:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.com$')]),
    //username:new FormControl(,[Validators.required,Validators.pattern('[^ ]*$')]),
    password:new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_]).{8,}")])
  })

  get doctor_id(){
    return this.addDoctorForm.get('doctor_id');
  }
  get doctor_name(){
    return this.addDoctorForm.get('doctor_name');
  }
  get Gender(){
    return this.addDoctorForm.get('gender');
  }
  get Specialist(){
    return this.addDoctorForm.get('specialist');
  }
  get Address(){
    return this.addDoctorForm.get('address');
  }
  get Contact_No(){
    return this.addDoctorForm.get('contact_no');
  }
  get Email_id(){
    return this.addDoctorForm.get('email_id');
  }
  get Password(){
    return this.addDoctorForm.get('password');
  }
  addDoctor(){
    this.isLoading=true;
    setTimeout(() => {
      this.showPage()
    }, 5000);
    //console.warn(this.addDoctorForm.value);
    this.saveDoctor();
    alert("Added Doctor Successfully");
  }
  showPage(){
    this.isLoading=false;
  }

  saveDoctor(){
    this.serv.createDoctor(this.doctor).subscribe( data =>{
      console.log(data);
      this.goToDoctorsList();
    },
    error => console.log(error));
  }

  goToDoctorsList(){
    this.router.navigate(["/admin/edit-view-all-doctors"])
  }
}