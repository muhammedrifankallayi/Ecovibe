import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const route:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:"register",component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  { path:'profile/edit',component:ProfileComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UserRoutingModule { }
