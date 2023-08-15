import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';



const route:Routes = [
  { path:'',component:DashboardComponent }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AdminRoutingModule { }
