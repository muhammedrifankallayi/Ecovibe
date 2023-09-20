import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { OtpComponent } from './otp/otp.component';
import { HosterReqComponent } from './hoster-req/hoster-req.component';
import { SuccessComponent } from './success/success.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UserAuthGuard } from '../guards/user-auth.guard';
import { ForgetComponent } from './forget/forget.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingDoneComponent } from './booking-done/booking-done.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { SettingsComponent } from './settings/settings.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const route:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:"register",component:RegisterComponent},
  { path:'login',component:LoginComponent,canActivate:[UserAuthGuard]},
  { path:'home',component:HomeComponent,canActivate:[UserAuthGuard]},
  {path:'profile',component:ProfileComponent},
  { path:'profile/edit',component:ProfileComponent },
  {path:"settings",component:SettingsComponent},
  {path:"otp",component:OtpComponent},
  {path:"hoster-req",component:HosterReqComponent},
  {path:"approval",component:SuccessComponent},
  {path:"subscription",component:SubscriptionComponent},
  {path:"forget",component:ForgetComponent},
  {path:"setpassword",component:SetpasswordComponent},
  {path:"singleView",component:SingleviewComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"bookingdone",component:BookingDoneComponent},
  {path:"notification",component:NotificationsComponent},
  {path:"chatpage",component:ChatpageComponent},
  {path:"chatlist",component:ChatListComponent},
  {path:"resetpassword",component:ResetPasswordComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
