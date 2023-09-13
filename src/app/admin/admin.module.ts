import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import { MatFormFieldModule  } from "@angular/material/form-field"
import { MatButtonModule  } from "@angular/material/button"
import { MatSelectModule  } from "@angular/material/select";
import { MatIconModule  } from "@angular/material/icon";
import { GalleryComponent } from './gallery/gallery.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomsComponent } from './rooms/rooms.component'
import { MatDialogModule } from '@angular/material/dialog';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';






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
AddRoomComponent,
RoomsComponent,
ChatListComponent,
ChatComponent,



  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule
   
  
  ]
})
export class AdminModule { }
