import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoster-req',
  templateUrl: './hoster-req.component.html',
  styleUrls: ['./hoster-req.component.css']
})
export class HosterReqComponent {


 
  constructor(private service : UserService) {}

  ngOnInit() {
 
  }

  resortForm = new FormGroup({
    hosterName : new FormControl("",[Validators.required]),
    resortName : new FormControl("",[Validators.required]),
    address : new FormControl("",[Validators.required]),
    location : new FormControl("",[Validators.required]),
    mobile : new FormControl("",[Validators.required,Validators.minLength(10)]),
    type : new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    occupency : new FormControl("",[Validators.required])


   })

   OnSubmit(){

if(this.resortForm.valid){
  const data = this.resortForm.value

  this.service.saveReq(data).subscribe((res:any)=>{
    console.log(res.message);
   Swal.fire({
    icon:"success",
    title:'Sent to Admin',
    text:"Your information send to admin ",
    confirmButtonText:'OK'
    
   })
    
    
  },(err)=>{
    console.log(err.error.message);
    
  })

}

   }

}
