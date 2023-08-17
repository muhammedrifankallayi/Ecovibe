import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes:Routes=[
{path:'',component:DashboardComponent},
{path:'users',component:UsersComponent}

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