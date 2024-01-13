import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLeftNavComponent } from './admin-left-nav/admin-left-nav.component';
import { AddNewDoctorComponent } from './add-new-doctor/add-new-doctor.component';
import { AddNewPatientComponent } from './add-new-patient/add-new-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewAllDoctorsComponent } from './view-all-doctors/view-all-doctors.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientClassComponent } from './patient-class/patient-class.component';
import { MyServiceService } from './my-service.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminHeaderComponent,
    AdminComponent,
    AdminLeftNavComponent,
    AddNewDoctorComponent,
    AddNewPatientComponent,
    DashboardComponent,
    ViewAllDoctorsComponent,
    UpdateDoctorComponent,
    UpdatePatientComponent,
    ViewAllPatientsComponent,
    MyProfileComponent,
    DoctorComponent,
    PatientClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
