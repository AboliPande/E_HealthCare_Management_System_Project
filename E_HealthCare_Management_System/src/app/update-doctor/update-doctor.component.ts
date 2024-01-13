import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorComponent } from '../doctor/doctor.component';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {
  id: number=0;
  doctor: DoctorComponent = new DoctorComponent();

  constructor(private serv:MyServiceService,private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.serv.getDoctorById(this.id).subscribe(data => {
        this.doctor = data;
      }, error => console.log(error));
    }



  isLoading:boolean | undefined;
  updateDoctorForm=new FormGroup({
    doctor_id:new FormControl('',[Validators.required]),
    doctor_name:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z ]*$')]),
    gender:new FormControl('',[Validators.required]),
    specialist:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    contact_no:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]),
    email_id:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.com$')]),
    //username:new FormControl('',[Validators.required,Validators.pattern('[^ ]*$')]),
    password:new FormControl('',[Validators.required,Validators.pattern("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_]).{8,}")])
  });
  get doctor_id(){
    return this.updateDoctorForm.get('doctor_id');
  }
  get doctor_name(){
    return this.updateDoctorForm.get('doctor_name');
  }
  get Gender(){
    return this.updateDoctorForm.get('gender');
  }
  get Specialist(){
    return this.updateDoctorForm.get('specialist');
  }
  get Address(){
    return this.updateDoctorForm.get('address');
  }
  get Contact_No(){
    return this.updateDoctorForm.get('contact_no');
  }
  get Email_id(){
    return this.updateDoctorForm.get('email_id');
  }
  /*get Username(){
    return this.updateDoctorForm.get('username');
  }*/
  get Password(){
    return this.updateDoctorForm.get('password');
  }
  updateDoctor(){
    this.isLoading=true;
    setTimeout(() => {
      this.showPage()
    }, 5000);
    //console.warn(this.updateDoctorForm.value);
    this.serv.updateDoctor(this.id, this.doctor).subscribe( data =>{
      this.goToDoctorList();
    }
    , error => console.log(error));
    alert("Updated Doctor Successfully");
  }

  showPage(){
    this.isLoading=false;
  }

  goToDoctorList(){
    this.router.navigate(['/admin/edit-view-all-doctors']);
  }
}