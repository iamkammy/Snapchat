import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router) {
 console.log('sdlfkjlskdjfffffffffffffffffsssssssssssssssss')    
   }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//     let token = localStorage.getItem('AuthUSerlogin') 

    
//  console.log('sdlfkjlskdjfffffffffffffffffsssssssssssssssss')   
//     console.log(token);
//     if (token == 'true') {
//       return false;
//     }
    
    // this.router.navigate(['chat']);
    // return false;
  }

  
}
