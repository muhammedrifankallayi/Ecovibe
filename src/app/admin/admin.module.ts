import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import {  MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import {  MatListModule } from '@angular/material/list'
import {  MatButtonModule } from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';
import { BookingsComponent } from './bookings/bookings.component'






@NgModule({
  declarations: [
DashboardComponent,
NavComponent,
BookingsComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
  
  ]
})
export class AdminModule { }
