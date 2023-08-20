import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './superAdmin-routing.module';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ResortsComponent } from './resorts/resorts.component';



@NgModule({
  declarations: [

   
    DashboardComponent,
    SideBarComponent,
    UsersComponent,
    LoginComponent,
    ResortsComponent

  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }
