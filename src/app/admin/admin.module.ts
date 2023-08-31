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
import { MatSelectModule  } from "@angular/material/select";
import { GalleryComponent } from './gallery/gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component'
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
DashboardComponent,
NavComponent,
BookingsComponent,
AboutComponent,
LoginComponent,
ProfileComponent,
GalleryComponent,
FacilitiesComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
   
  
  ]
})
export class AdminModule { }
