import { Component ,OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  notifications:number=0

ngOnInit(): void {
  this.service.getNotifyLength().subscribe((res:any)=>{
    this.notifications = res.count
  })
}

  constructor(private router: Router, public service:UserService) {}
  shouldShowNav(): boolean {
    // Get the current route URL
    const currentUrl = this.router.url;

   
    return !currentUrl.includes('login') && !currentUrl.includes('register') && !currentUrl.includes('admin')&& !currentUrl.includes("superAdmin");
  }

Logout(){

Swal.fire({
  title:'Logout?',
  text:"want to logout??",
  confirmButtonText:"Logout",
  showCancelButton:true,
  icon:"question"

}).then((result)=>{
  if(result.isConfirmed){
    localStorage.removeItem("token")
 
    this.router.navigate(["/login"])
  }
})

 
}




}
