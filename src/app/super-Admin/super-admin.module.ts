import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRouting } from './superAdmin-routing.module';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [

    UsersComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    SuperAdminRouting
  ]
})
export class SuperAdminModule { }
