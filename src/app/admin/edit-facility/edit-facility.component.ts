import { Component ,OnInit ,Inject, ElementRef, ViewChild ,NgZone} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA ,MatDialogRef ,MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  


  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
   private service:AdminService ,private dialogref:MatDialogRef<EditFacilityComponent>,
   private router:Router,private fb: FormBuilder, private dialog:MatDialog, private ngZone:NgZone){
  

 

  }
ngOnInit(): void {
  console.log(this.data.data.name);
this.patchValue()
  
}

itemForm = new FormGroup({
  name:new FormControl("",[Validators.required]),
  distance_From_Resort:new FormControl("",[Validators.required]),
  id:new FormControl("")
})

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

  this.itemForm.patchValue({
    name:this.data.data.name,
    distance_From_Resort:this.data.data.distance_From_Resort,
    id:this.data.data._id
  })
}







submit(){
  if(this.data.restaurant){
    const id = this.data.data._id
  this.service.editRestaurant(this.FormDataRestaurant.value,id).subscribe(()=>{
    this.router.navigate(['admin/facilities'])

      this.dialogref.close()
  })
  }else if(this.data.Amenties){
    const formdata = this.FormDataAmentis.value
    const id = this.data.data._id 
    this.service.editAmenties(formdata,id).subscribe((res)=>{
      this.router.navigate(['admin/facilities'])
      this.dialogref.close()

    })
  }else{
const data = this.itemForm.value
console.log(data);


  this.service.editSurroundings(data).subscribe((res)=>{
    this.dialogref.close()
   
  })
    
  }


}


editItem(data:any){
  this.dialog.open(EditFacilityComponent,{
    width:"600px",
    data:{data,item:true,parent_id:this.data.data._id}
  }).afterClosed().subscribe(()=>{
    this.dialogref.close()
  })
}



}


