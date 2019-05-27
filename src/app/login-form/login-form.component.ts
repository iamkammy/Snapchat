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


  resetPassword(email: string) {
    console.log('emailllllllllllll',email);
    try{
  this.authService.resetPassword(email).then((res:any) => { 
   
    Swal.fire(
      'An Email has been sent to your Email Id , Please Verify',
      'You clicked the button!',
      'success'
    )

    console.log('emaillll2222233333',"email sent",res)
     })
      .catch((error) => {
        console.log('emaillll2222244444 from line 36',error);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: `${error}`,
        })

      })
    }
    catch(error){
      console.log('erorrrrrrrrrrrrr from line 40',error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: `${error}`,
       
      })
    }
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
