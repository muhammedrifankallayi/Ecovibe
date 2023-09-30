import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { userReducer ,subscriptionReducer } from './super-Admin/state/user/user.reducer';
import { userEffects, } from './super-Admin/state/user/user.effects';

import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';

import { SocketIoModule } from 'ngx-socket-io';

import { NgChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment.development';






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
    StoreModule.forRoot({users:userReducer,subscription:subscriptionReducer}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([userEffects]),
    ToastrModule.forRoot(),
    FormsModule,
    SocketIoModule.forRoot({url:environment.userApiUrl}),
    NgChartsModule,
    
  
    
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent],

})
export class AppModule { }
