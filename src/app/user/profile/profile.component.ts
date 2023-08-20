import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
 
ngOnInit(): void {
  this.loadProfile()
}
  constructor(private router:Router,private http:HttpClient){}

// Set the default active tab

  activeTab = 'timeline'; 
  userData:string = ''

  switchTab(tab: string) {
    this.activeTab = tab;
  }

// checking edit page or profile page

shouldShowEdit(): boolean {
  // Get the current route URL
  const currentUrl = this.router.url;

 
  return currentUrl.includes('edit') 
}



   
//image changing in edit profile

  selectedImage: string | ArrayBuffer | null = null;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }

showw(){
  console.log("hhooolloo");
  
}

loadProfile(){
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  this.http.get("http://localhost:4000/getUser",{headers}).subscribe((res:any)=>{
    this.userData = res.data
    console.log(this.userData);
    
  })
}
  

}
