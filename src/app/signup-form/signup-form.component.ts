import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {  }

  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authService.signUp(email, password, displayName)
      .then(resolve => {
        console.log(resolve);

       

        // this.router.navigate(['login'])
      } )


      .catch(error => this.errorMsg = error.message);
      // alert(this.errorMsg);
      console.log(this.errorMsg);
  }
}
