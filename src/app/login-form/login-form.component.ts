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
export class LoginFormComponent implements OnInit {
  x = localStorage.getItem('RememberMe');

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  email:  string ;
  password: string;
 
  errorMsg: string;
  constructor(private authService: AuthService, private router: Router) { 
    if(this.x) {
      this.email=this.x.split('_')[0];
      this.password=this.x.split('_')[1];
    }
    
  }
  ngOnInit(){
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 250,
        },
        color: {
            value: '#ff0000'
        },
        shape: {
            type: 'triangle',
        },
}
};

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
