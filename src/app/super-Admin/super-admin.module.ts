import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './superAdmin-routing.module';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ResortsComponent } from './resorts/resorts.component';
import { RequestsComponent } from './requests/requests.component';
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { SubscriptionComponent } from './subscription/subscription.component'



@NgModule({
  declarations: [

   
    DashboardComponent,
    SideBarComponent,
    UsersComponent,
    LoginComponent,
    ResortsComponent,
    RequestsComponent,
    SubscriptionComponent

  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule 
  ]
})
export class SuperAdminModule { }
