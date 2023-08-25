import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { OtpComponent } from './otp/otp.component';
import { HosterReqComponent } from './hoster-req/hoster-req.component';

const route:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:"register",component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  { path:'profile/edit',component:ProfileComponent },
  {path:"search",component:SearchComponent},
  {path:"otp",component:OtpComponent},
  {path:"hoster-req",component:HosterReqComponent}
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
