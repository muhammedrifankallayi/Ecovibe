import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './super-Admin/state/user/user.reducer';
import { userEffects } from './super-Admin/state/user/user.effects';





@NgModule({
  declarations: [
    AppComponent,
   
  
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({users:userReducer}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([userEffects]),
    ToastrModule.forRoot()
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
