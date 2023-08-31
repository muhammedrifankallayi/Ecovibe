import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component';



const route:Routes = [
  { path:'',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'about',component:AboutComponent },
  {path:"profile",component:ProfileComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"facilities",component:FacilitiesComponent}

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
