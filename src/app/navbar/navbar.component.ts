import { Component, OnInit, OnChanges, AfterViewChecked, DoCheck ,ChangeDetectorRef,} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ChatService } from '../services/chat.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user: Observable<firebase.User>;
  saga: FirebaseObjectObservable<any> 
  userEmail: string;
  userName: any;
  users;
 ulshow:boolean = false;
  constructor(private authService: AuthService, private chatservice: ChatService, private cd: ChangeDetectorRef) { 
    
  }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        console.log(user);
        this.userEmail = user.email;

        this.chatservice.getUser().subscribe(x=>{ 
          console.log(x);
          this.userName = x.displayName;
          this.cd.markForCheck();
         console.log(x.displayName); 
        })
        
      }
     
     
    });
   
    
  }

   
  login(){
    
  }

  logout() {
    this.authService.logout();
  }
  showusers(){
    this.ulshow = !this.ulshow;
   
     this.chatservice.getUsers().subscribe(users => {
     this.users = users;
     console.log(this.users);
   });

   setTimeout(()=>{
    this.ulshow = !this.ulshow;
    // console.log(this.ulshow);

   },3000)
   
  }
 
}
