import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { NavComponent } from './user/nav/nav.component';
import { ProfileComponent } from './user/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule  } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { DashboardComponent } from './super-Admin/dashboard/dashboard.component';
import { UsersComponent } from './super-Admin/users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    DashboardComponent,
    UsersComponent,
  
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
