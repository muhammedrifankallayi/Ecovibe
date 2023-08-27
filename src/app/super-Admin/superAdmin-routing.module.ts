import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ResortsComponent } from './resorts/resorts.component';
import { RequestsComponent } from './requests/requests.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes:Routes=[
{path:'',component:LoginComponent},
{path:"dashboard",component:DashboardComponent},
{path:'users',component:UsersComponent},
{path:"resorts",component:ResortsComponent},
{path:"requests",component:RequestsComponent},
{path:"subscriptions",component:SubscriptionComponent}

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