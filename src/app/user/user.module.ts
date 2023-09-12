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
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { TextPipe } from '../pipes/text.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
//pipes
import { DividePipe } from '../pipes/divide.pipe';
import { SearchPipe } from '../pipes/search.pipe';


import { BookingDoneComponent } from './booking-done/booking-done.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DateDistancePipe } from '../pipes/date-distance.pipe';


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
    SetpasswordComponent,
    SingleviewComponent,
    TextPipe,
    CheckoutComponent,
    DividePipe,
BookingDoneComponent,
FooterComponent,
SearchPipe,
NotificationsComponent,
DateDistancePipe

   
   
   

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
    MatSelectModule,


  ]
 
})
export class UserModule { }
