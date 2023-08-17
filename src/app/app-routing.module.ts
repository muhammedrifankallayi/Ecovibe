import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// child rounting 

const routes: Routes = [
  
  {path:"",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},

  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
 
  {path:"superAdmin",loadChildren:()=>import("./super-Admin/super-admin.module").then(m=>m.SuperAdminModule)}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
