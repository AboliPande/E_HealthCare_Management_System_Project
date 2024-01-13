import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientClassComponent } from '../patient-class/patient-class.component';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {

  id: number = 0;
  patient: PatientClassComponent = new PatientClassComponent();

  constructor(private serv: MyServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.serv.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    }, error => console.log(error));
  }

  isLoading: boolean | undefined;
  updatePatientForm = new FormGroup({
    patient_id: new FormControl('', [Validators.required]),
    patient_name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]*$')]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    contact_no: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]),
    app_date:new FormControl('',[Validators.required]),
    payment:new FormControl('',[Validators.required]),
    email_id: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.com$')]),
    // username: new FormControl('', [Validators.required, Validators.pattern('[^ ]*$')]),
    password: new FormControl('', [Validators.required, Validators.pattern("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_]).{8,}")])
  });

  get app_date(){
    return this.updatePatientForm.get('app_date');
  }
  get payment(){
    return this.updatePatientForm.get('payment');
  }
  get patient_id() {
    return this.updatePatientForm.get('patient_id');
  }
  get patient_name() {
    return this.updatePatientForm.get('patient_name');
  }
  get Gender() {
    return this.updatePatientForm.get('gender');
  }
  
  get Address() {
    return this.updatePatientForm.get('address');
  }
  get Contact_No() {
    return this.updatePatientForm.get('contact_no');
  }
  get Email_id() {
    return this.updatePatientForm.get('email_id');
  }
  get Password() {
    return this.updatePatientForm.get('password');
  }
  updatePatient() {
    this.isLoading = true;
    setTimeout(() => {
      this.showPage()
    }, 3000);
    // console.warn(this.updatePatientForm.value);
    // console.warn(this.updatePatientForm.value);
    this.serv.updatePatientById(this.id, this.patient).subscribe(data => {
      this.goToPatientsList();
      alert("Updated Patient Successfully");
    })
  }
  showPage() {
    this.isLoading = false;
  }

  goToPatientsList(){
    this.router.navigate(['/admin/edit-view-all-patient']);
  }
}
