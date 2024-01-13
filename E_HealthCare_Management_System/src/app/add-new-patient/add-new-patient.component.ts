import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientClassComponent } from '../patient-class/patient-class.component';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent {
  isLoading:boolean | undefined;

  patient: PatientClassComponent = new PatientClassComponent();
  constructor(private serv: MyServiceService,private router: Router) { }

  addPatientForm=new FormGroup({
    patient_id:new FormControl('',[Validators.required]),
    patient_name:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z ]*$')]),
    gender:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    contact_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    app_date:new FormControl('',[Validators.required]),
    payment:new FormControl('',[Validators.required]),
    email_id:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.com$')]),
    //username:new FormControl('',[Validators.required,Validators.pattern('[^ ]*$')]),
    password:new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_]).{8,}")])
  });


  get patient_id(){
    return this.addPatientForm.get('patient_id');
  }
  get patient_name(){
    return this.addPatientForm.get('patient_name');
  }

  get app_date(){
    return this.addPatientForm.get('app_date');
  }
  get payment(){
    return this.addPatientForm.get('payment');
  }
  get Gender(){
    return this.addPatientForm.get('gender');
  }
  get Address(){
    return this.addPatientForm.get('address');
  }
  get Contact_No(){
    return this.addPatientForm.get('contact_no');
  }
  get Email_id(){
    return this.addPatientForm.get('email_id');
  }

  get Password(){
    return this.addPatientForm.get('password');
  }
  addPatient(){
    this.isLoading=true;
    setTimeout(() => {
      this.showPage()
    },5000);
    //console.warn(this.addPatientForm.value);
    this.savePatient();
    alert("Added Patient Successfully");
  }
  savePatient(){
    this.serv.createPatient(this.patient).subscribe( data =>{
      console.log(data);
      this.gotoPatientsList();
    },
    error => console.log(error));
  }
  gotoPatientsList() {
    this.router.navigate(['/admin/edit-view-all-patient']);
  }

  showPage(){
    this.isLoading=false;
    }
  }