import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ResortsComponent } from './resorts/resorts.component';

const routes:Routes=[
{path:'',component:LoginComponent},
{path:"dashboard",component:DashboardComponent},
{path:'users',component:UsersComponent},
{path:"resorts",component:ResortsComponent}

]



@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
 RouterModule
  ]
})
export class SuperAdminRoutingModule { }