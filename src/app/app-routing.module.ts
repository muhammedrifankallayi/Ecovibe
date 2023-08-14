import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './user/register/register.component'
import {LoginComponent } from './user/login/login.component'
import { HomeComponent } from './user/home/home.component';
const routes: Routes = [
  // redirection
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path:"register",component:RegisterComponent},
{ path:'login',component:LoginComponent},
{ path:'home',component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
