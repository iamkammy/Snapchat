import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'; 
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMsg: string;
  
  constructor(private authService: AuthService, private router: Router) { }

pass(event){
  // console.log(event.target.value);
  if(event.keyCode == 13){
    this.login();
  }
}

  login() {
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
    .catch(error => this.errorMsg = error.message); 
  }
  resetPassword(email: string) {
    console.log('emailllllllllllll',email);
    try{

  this.authService.resetPassword(email).then((res:any) => console.log('emaillll2222233333',"email sent",res))
      .catch((error) => {
        console.log('emaillll2222244444',error);
      })
    }
    catch(error){
      console.log('erorrrrrrrrrrrrr',error);
    }
  }
  
}
