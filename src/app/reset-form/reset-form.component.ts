import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  constructor(private authService:AuthService) { }
  email;
  ngOnInit() {
  }
   
  resetPassword(email: string) {
  
    console.log('emailllllllllllll',email);
    try{
  this.authService.resetPassword(email).then((res:any) => { 
   
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'An Email has been sent to your Email Id , Please Verify',
      showConfirmButton: false,
      timer: 1565767500
    })

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

}
