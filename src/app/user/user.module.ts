import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

import {ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [

    RegisterComponent,
  
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
   
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule

  ]
 
})
export class UserModule { }
