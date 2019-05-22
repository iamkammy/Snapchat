import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
      this.user = afAuth.authState;
    }

    authUser() {
      return this.user;
    
    }

    get currentUserId(): string {
      return this.authState !== null ? this.authState.uid : '';
    }

    login(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          this.authState = user;
          this.setUserStatus('online');
          this.router.navigate(['chat']);
          Swal.fire(
            'Successfully Login!',
            'success'
          )

          this.refresh();
        })
        .catch((err)=>{
          alert(err);
        })
    }

    refresh(){
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }

    logout() {
      this.afAuth.auth.signOut();
      this.router.navigate(['login']);
    }

    signUp(email: string, password: string, displayName: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
              .then((user) => {
                this.authState = user;
                const status = 'online';
                this.setUserData(email, displayName, status);

                Swal.fire({
                  position: 'top-end',
                  type: 'success',
                  title: 'Successfully Regestered',
                  showConfirmButton: false,
                  timer: 1000
                })

                setTimeout(()=>{
                  this.router.navigate(['login'])
                },1000)

              }).catch(error => {
                    console.log(error.message);
                    this.router.navigate(['signup'])
                    Swal.fire('Oops...', `${error.message}`, 'error')
                 });
    }

    setUserData(email: string, displayName: string, status: string): void {
      const path = `users/${this.currentUserId}`;
      const data = {
        email: email,
        displayName: displayName,
        status: status
      };

      this.db.object(path).update(data)
        .catch(error => console.log(error));
    }

    setUserStatus(status: string): void {
      const path = `users/${this.currentUserId}`;

      const data = {
        status: status
      };

      this.db.object(path).update(data)
        .catch(error => console.log(error));
    }
}
