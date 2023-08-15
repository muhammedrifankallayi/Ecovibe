import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './user/register/register.component'
import {LoginComponent } from './user/login/login.component'
import { HomeComponent } from './user/home/home.component';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [
  // redirection
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
  {path:"",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
