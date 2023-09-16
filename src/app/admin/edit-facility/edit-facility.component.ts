import { Component ,OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any , private service:AdminService ,private dialogref:MatDialogRef<EditFacilityComponent>,private router:Router){}
ngOnInit(): void {
  console.log(this.data.data.name);
this.patchValue()
  
}



FormDataRestaurant = new FormGroup({
  name:new FormControl("",[Validators.required]),
  distance:new FormControl("",[Validators.required]),
})
FormDataAmentis = new FormGroup({
  name:new FormControl("",[Validators.required]),
  description:new FormControl("",[Validators.required]),
})

patchValue(){
  this.FormDataAmentis.patchValue({
    name:this.data.data.name,
    description:this.data.data.description
  })
  this.FormDataRestaurant.patchValue({
    name:this.data.data.name,
    distance:this.data.data.distance
  })
}


submit(){
  if(this.data.restaurant){
    const id = this.data.data._id
  this.service.editRestaurant(this.FormDataRestaurant.value,id).subscribe(()=>{
    this.router.navigate(['admin/facilities'])

      this.dialogref.close()
  })
  }else{
    const formdata = this.FormDataAmentis.value
    const id = this.data.data._id 
    this.service.editAmenties(formdata,id).subscribe((res)=>{
      this.router.navigate(['admin/facilities'])
      this.dialogref.close()

    })
  }
}




}


