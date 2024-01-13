import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
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

const routes: Routes = [
  {
    path: '',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'admin-header',
    component:AdminHeaderComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'',redirectTo:'dashboard',pathMatch:'full'
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'add-new-doctor',
        component:AddNewDoctorComponent
      },
      {
        path:'add-new-patient',
        component:AddNewPatientComponent
      },
      {
        path:'edit-view-all-doctors',
        component:ViewAllDoctorsComponent
      },
      {
        path:'update-doctor/:id',
        component:UpdateDoctorComponent
      },
      {
        path:'update-patient/:id',
        component:UpdatePatientComponent
      },
      {
        path:'edit-view-all-patient',
        component:ViewAllPatientsComponent
      },
      {
        path:'my-profile',
        component:MyProfileComponent
      }
    ]
  },
  {
    path:'admin-left-nav',
    component:AdminLeftNavComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
