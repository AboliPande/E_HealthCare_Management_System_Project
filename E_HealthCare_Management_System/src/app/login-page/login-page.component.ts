import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isLoading:boolean | undefined;
  loginForm = new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern('[Admin]+@[gmail]+\.com$')]),
    password:new FormControl('',[Validators.required,
    Validators.pattern('^Admin@123$')])
  });
  get emailId(){
    return this.loginForm.get('emailId');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  constructor(private router:Router){
    
  }
  loginFormSubmit(){
    console.log(this.loginForm.get('password')?.value);
    this.isLoading=true;
    setTimeout(() => {
      this.showPage()
    }, 3000);
  }
  showPage(){
    this.isLoading=false;
    if(!this.isLoading){
      // if(this.loginForm.get('password')?.value=="Admin@123"){
      this.router.navigate(['/admin/dashboard']);
      // }
    }
  }
}