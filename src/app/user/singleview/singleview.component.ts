import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router  } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {

constructor(private activeRoute:ActivatedRoute ,private route:Router ,private service:UserService){
 
}

id:string=''
data:any
showImg:any
rooms:any



  ngOnInit(): void {
    
    this.activeRoute.queryParams.subscribe((params)=>{
      this.id = params['id']
    
    })


this.datas()





  }


datas(){
  this.service.getSingleView(this.id).subscribe((res:any)=>{
    this.data = res.data
    console.log(res.data);
    this.showImg = res.mainImg
    this.rooms = res.rooms
   })
   

   
}

adults=0
children=0


increaseChildren(){
this.children= this.children+1
}
decreaseChildren(){
  if(this.children!=0){
    this.children= this.children-1
  }
 


}
increaseAdults(){
 this.adults =   this.adults+1
}

decreaseAdults(){
  if(this.adults!=0){

    this.adults =  this.adults-1

  }

}

FormData = new FormGroup({
  checkin:new FormControl("",[Validators.required]),
  checkout:new FormControl("",[Validators.required])
})

Availability(){
  const checkin = this.FormData.value.checkin
  const checkout = this.FormData.value.checkout
  const data = {checkin:checkin,checkout:checkout,adults:this.adults,childrens:this.children,resort_id:this.id}
  this.service.availability(data).subscribe((res:any)=>{
    this.rooms = res.rooms
   
  },(err)=>{
    Swal.fire({
      title:"Sorry",
      text:err.error.message,
      confirmButtonText:"ok",
      icon:"error",

    })
  })
}



selectedRoomData:any

selectedRoom(item:any){
this.selectedRoomData= item
}

checkout(){

 if(!this.FormData.valid){
  Swal.fire({
   title:"Warning!",
   text:'please select checkin and checkout ',
   icon:"warning",
   confirmButtonText:"Ok"
   
  });
 }else if(!this.selectedRoomData){
  Swal.fire({
    title:"warning",
    text:"Please select a room",
    icon:"warning",
    confirmButtonText:"ok"
  })
 }else{

  const room = this.selectedRoomData

  const room_id = room._id
  const resort_id = this.id

  const navigationExtras: NavigationExtras = {
    queryParams: {
      room_id: room_id,
      resort_id: resort_id,
    checkin:this.FormData.value.checkin,
    checkout:this.FormData.value.checkout
    }
  };
  
  // Use the Router to navigate to the /checkout route with the parameters
  this.route.navigate(['/checkout'], navigationExtras);

 }
 
 
  
}

viewChat(){
const navigationExtras:NavigationExtras={
  queryParams:{
    adminId:this.id
  }
}
this.route.navigate(['/chatpage'],navigationExtras)
}




}
