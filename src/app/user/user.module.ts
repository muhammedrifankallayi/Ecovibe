import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

import {ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component'
import { MatToolbarModule }  from "@angular/material/toolbar"
import { MatInputModule } from '@angular/material/input'
import {  MatButtonModule} from "@angular/material/button"
import {MatFormFieldModule}  from "@angular/material/form-field"
import{ GoogleMapsModule } from "@angular/google-maps";
import { OtpComponent } from './otp/otp.component'


@NgModule({
  declarations: [

    RegisterComponent,
  
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    SearchComponent,
    OtpComponent,
   
   
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,GoogleMapsModule,
    MatButtonModule


  ]
 
})
export class UserModule { }
