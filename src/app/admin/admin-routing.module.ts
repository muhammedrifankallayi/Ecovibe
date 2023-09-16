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
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';


const route:Routes = [
  { path:'',component:LoginComponent,canActivate:[AdminAuthGuard] },
  {path:'dashboard',component:DashboardComponent,canActivate:[AdminAuthGuard]},
  {path:'bookings',component:BookingsComponent},
  {path:'about',component:AboutComponent },
  {path:"profile",component:ProfileComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"facilities",component:FacilitiesComponent},
  {path:"addroom",component:AddRoomComponent},
  {path:"rooms",component:RoomsComponent},
  {path:"chat",component:ChatComponent},
  {path:"chatlist",component:ChatListComponent}

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
