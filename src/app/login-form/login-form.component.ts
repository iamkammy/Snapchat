import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  x = localStorage.getItem('RememberMe');

  email:  string ;
  password: string;
 
  errorMsg: string;
  constructor(private authService: AuthService, private router: Router) { 
    if(this.x) {
      this.email=this.x.split('_')[0];
      this.password=this.x.split('_')[1];
    }
    
  }

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




  remember(e){
    if(this.email && this.password){
      if(e.target.checked){
        localStorage.setItem('RememberMe', this.email +"_"+ this.password)
      }
      if(e.target.checked == false){
        localStorage.removeItem('RememberMe');
      }
    }
    console.log(e);
  }


  
}
