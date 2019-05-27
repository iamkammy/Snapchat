import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import {CanActivate} from '@angular/router';
// import {ResetFormComponent} from './reset-form/reset-form.component',
import {ResetFormComponent} from './reset-form/reset-form.component'

const routes: Routes = [
  { path: 'chat', canActivate:[false], component: ChatroomComponent},
  // { path: 'hello', component:ResetFormComponent},
  { path: 'hello', component: ResetFormComponent},
  { path: 'signup', component: SignupFormComponent},
  { path: 'login', component: LoginFormComponent},
 
 
  { path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
