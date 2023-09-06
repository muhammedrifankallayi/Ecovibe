import { Component } from '@angular/core';

import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {

  constructor(private service:AdminService){}

FormData = new FormGroup({
  roomNumber : new FormControl(0,[Validators.required]),
  roomType : new FormControl("",[Validators.required]),
  capacity : new FormControl(0,[Validators.required]),
  pricePerNight : new FormControl(0,[Validators.required]),
  amenities : new FormControl("",[Validators.required]),
  adults : new FormControl(0,[Validators.required]),
  childrens : new FormControl(0,[Validators.required]),
  beds : new FormControl(0,[Validators.required]),
})



OnSubmit(){
  if(this.FormData.valid){
    const data  = this.FormData.value
    this.service.submitRoom(data).subscribe((res:any)=>{
      alert(res.message)
    })
  }

}


}
