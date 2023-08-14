import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { NavComponent } from './user/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CustomValidatorComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
