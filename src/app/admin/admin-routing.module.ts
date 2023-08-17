import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AboutComponent } from './about/about.component';



const route:Routes = [
  { path:'',component:DashboardComponent },
  {path:'bookings',component:BookingsComponent},
  { path:'about',component:AboutComponent }

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
