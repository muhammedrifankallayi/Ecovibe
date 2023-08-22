import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.loadProfile()
  }
constructor(private http:HttpClient){}

data:any
loadProfile(){

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  });
  
  this.http.get("http://localhost:4000/admin/getAdmin", { headers }).subscribe(
    (res: any) => {
    
      this.data = res.data;
    },
    (error) => {
      console.error(error);
    }
  );
  
}

values:boolean = true;
sidebarToggled(value: boolean):void{
  this.values=value
 
}  handleSidebarToggle(isCollapsed: boolean) {
 
 this.values = isCollapsed
}


}
