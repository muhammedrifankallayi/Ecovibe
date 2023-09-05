import { Component } from '@angular/core';

import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {


FormData = new FormGroup({
  roomNumber : new FormControl("",[Validators.required]),
  roomType : new FormControl("",[Validators.required]),
  capacity : new FormControl("",[Validators.required]),
  pricePerNight : new FormControl("",[Validators.required]),
  amenities : new FormControl("",[Validators.required]),
  adults : new FormControl("",[Validators.required]),
  childrens : new FormControl("",[Validators.required]),
  beds : new FormControl("",[Validators.required]),
})

OnSubmit(){
  const data  = this.FormData.value
}


}
