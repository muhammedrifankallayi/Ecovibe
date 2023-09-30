import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/super-Admin/state/model/user.model';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
 
src:any

ngOnInit(): void {
  this.loadProfile()

this.wishLists()




}
  constructor(private router:Router,private http:HttpClient  ,private service:UserService,private toaster:ToastrService){}

// Set the default active tab

  activeTab = 'about'; 
  userData:any

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
 this.image = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }



loadProfile(){

  this.service.getProfile().subscribe(
  (res: User) => {
    this.userData = res.user; // Assign the whole response to userData
    console.log(this.userData);
    this.FormData.patchValue({
      name:this.userData.name,
      email:this.userData.email,
      mobile:this.userData.mobile,
      age:this.userData.age
    })
this.src = this.userData.profile_img? `http://localhost:4000/public/${this.userData.profile_img}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
  },
  (error) => {
    console.error("Error fetching user data:", error);
  }
);

   
    
    
  }

image:any

  


  submitImg(){
const formData = new FormData()

formData.append("file",this.image)
console.log(formData , this.image);


this.service.profileImg(formData).subscribe((res)=>{
  console.log(res);
  this.router.navigate(['/profile'])
  
})
  }




FormData= new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required]),
  mobile:new FormControl("",[Validators.required]),
  age:new FormControl("",[Validators.maxLength(2)])
})

editSubmit(){
 
  
if(this.FormData.valid){
  console.log(this.FormData.value);
  
  const data = this.FormData.value
  this.service.profileEdit(data).subscribe((res:any)=>{
    Swal.fire({
      timer:900,
      title:res.message,
      icon:"success"
    })
   
      if(this.image){
        this.submitImg()
      }
     
    
    
  },(err)=>{
    console.log(err.error.message);
    
  })
}else{
  Swal.fire({
    icon:"error",
    title:"Invalid",
    text:"your data not valid",
    confirmButtonText:"OK"
  })
}



}

wishlistData:any

wishLists(){
  this.service.getWishList().subscribe((res)=>{
this.wishlistData = res
console.log(res);

  })
}





RemoveFromWish(id:string){
   this.service.removeWishlist(id).subscribe((res:any)=>{
    this.toaster.show(res.message)
    this.ngOnInit()
   })
}

singleView(id:string){
  const queryParams = {id:id}
  this.router.navigate(['/singleView'],{queryParams:queryParams})
}



}


  


