import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component'
import { MatToolbarModule }  from "@angular/material/toolbar"
import { MatInputModule } from '@angular/material/input'
import {  MatButtonModule} from "@angular/material/button"
import {MatFormFieldModule}  from "@angular/material/form-field"
import {  MatCardModule } from "@angular/material/card"
import{ GoogleMapsModule } from "@angular/google-maps";
import { OtpComponent } from './otp/otp.component';
import { HosterReqComponent } from './hoster-req/hoster-req.component'
import { MatSelectModule } from '@angular/material/select';
import { SuccessComponent } from './success/success.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ForgetComponent } from './forget/forget.component';
import { SetpasswordComponent } from './setpassword/setpassword.component'


@NgModule({
  declarations: [

    RegisterComponent,
  
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    SearchComponent,
    OtpComponent,
    HosterReqComponent,
    SuccessComponent,
    SubscriptionComponent,
    ForgetComponent,
    SetpasswordComponent
   
   
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,GoogleMapsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule


  ]
 
})
export class UserModule { }
