import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


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

  constructor(private router: Router, private service:UserService) {}
  shouldShowNav(): boolean {
    // Get the current route URL
    const currentUrl = this.router.url;

   
    return !currentUrl.includes('login') && !currentUrl.includes('register') && !currentUrl.includes('admin')&& !currentUrl.includes("superAdmin");
  }

Logout(){
  localStorage.removeItem("token")
  this.router.navigate(["/login"])
}


}
