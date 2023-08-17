import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';

import { BookingsComponent } from './bookings/bookings.component';
import { AboutComponent } from './about/about.component'






@NgModule({
  declarations: [
DashboardComponent,
NavComponent,
BookingsComponent,
AboutComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
   
  
  ]
})
export class AdminModule { }
