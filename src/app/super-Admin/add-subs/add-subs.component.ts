import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';
import { loadsubscription } from '../state/user/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-subs',
  templateUrl: './add-subs.component.html',
  styleUrls: ['./add-subs.component.css']
})
export class AddSubsComponent {
constructor(private service:SuperAdminService  , private store:Store){}
    
FormData= new FormGroup({
  title: new FormControl("",[Validators.required]),
  price: new FormControl("",[Validators.required]),
  type: new FormControl("",[Validators.required]),
  description: new FormControl("",[Validators.required]),
  duration: new FormControl("",[Validators.required])
})  



OnSubmit(){
  const Data :any= this.FormData.value
 console.log(Data);
 
  if(Data){
    this.service.addSubscription(Data).subscribe((res)=>{
      alert("addedd successsfull..")
     this.store.dispatch(loadsubscription())
    })
  }


}


}
