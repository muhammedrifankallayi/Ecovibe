import { Component ,OnInit} from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit{


ngOnInit(): void {
  this.getResortData()
  this.add()
  
  

}

constructor( private service:AdminService  ){}

  action:boolean = true
  sidebarToggled(value:boolean){
   this.action = value
  }

resortData:any
user:any
is_editShow : boolean = false
hoster:string=''


  getResortData(){
    this.service.getAboutData().subscribe((res:any)=>{
 this.resortData = res.data
 this.user = res.Hoster
 console.log(this.user);
 this.hoster = this.user
 this.FormData.patchValue({
  email: this.resortData.email,
  hoster:this.user.name,
  location:this.resortData.location,
  mobile:this.resortData.mobile,
  address:this.resortData.resortAdress,
  resortName:this.resortData.resortName,
  type:this.resortData.resort_type
});
 
    })
  }


  showEdit(value:boolean){
   this.is_editShow = value


  }

  add(){
 console.log("haai");
 
    
    
  }

 
  FormData = new FormGroup({
    hoster:new FormControl(this.hoster,[Validators.required]),
    resortName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    mobile:new FormControl("",[Validators.required,Validators.minLength(10)]),
    location:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    about:new FormControl("",[Validators.required]),
    type:new FormControl(``)
  })
  

  OnSubmit(){
    Swal.fire({
      title:"Save changes?",
      text:"Are you sure to chage the data about resort",
      icon:"question",
      confirmButtonText:"Ok",
    }).then((result)=>{
      if(result.isConfirmed){
         console.log("workssss");
         
        const data = this.FormData.value
        this.service.saveAboutData(data).subscribe((res)=>{
          Swal.fire({
            title:"Saved successfully",
            timer:800,
            icon:"success",
            showConfirmButton:false
          })
        },(err)=>{
          console.log(err.error.message);
          
        })
      }
    })
  }
 
  



}
