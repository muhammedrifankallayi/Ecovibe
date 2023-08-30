import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import { MatFormFieldModule  } from "@angular/material/form-field"
import { MatButtonModule  } from "@angular/material/button"
import { MatSelectModule  } from "@angular/material/select"






@NgModule({
  declarations: [
DashboardComponent,
NavComponent,
BookingsComponent,
AboutComponent,
LoginComponent,
ProfileComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
   
  
  ]
})
export class AdminModule { }
