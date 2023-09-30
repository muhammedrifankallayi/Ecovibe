import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { message } from '../state/userType/user.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  FormData: FormGroup;
  minCheckinDate: string;
  minCheckoutDate: string;

constructor(private activeRoute:ActivatedRoute ,private route:Router ,private service:UserService , private toaster:ToastrService ,private fb:FormBuilder ){
 
  const today = new Date();
  // Format the current date as "YYYY-MM-DD".
  this.minCheckinDate = today.toISOString().split('T')[0];
  // Initialize the form with empty values.
  this.FormData = this.fb.group({
    checkin: ['', [Validators.required]],
    checkout: ['', [Validators.required]]
  });
  // Initialize the minCheckoutDate to the same value as minCheckinDate.
  this.minCheckoutDate = this.minCheckinDate;
 

}

id:string=''
data:any
showImg:any
rooms:any
reviews:any
userId=''


  ngOnInit(): void {
    
    this.activeRoute.queryParams.subscribe((params)=>{
      this.id = params['id']
    
    })


this.datas()

  }



  updateMinCheckoutDate() {
    const checkinDate = new Date(this.FormData.value.checkin);
    checkinDate.setDate(checkinDate.getDate() + 1); // Minimum checkout date is one day after checkin.
    this.minCheckoutDate = checkinDate.toISOString().split('T')[0];
    // Reset the checkout date value if it's less than the new minimum date.
    if (this.FormData.value.checkout < this.minCheckoutDate) {
      this.FormData.patchValue({ checkout: this.minCheckoutDate });
    }
  }




datas(){
  this.service.getSingleView(this.id).subscribe((res:any)=>{
    this.data = res.data
    console.log(res.data);
    this.showImg = res.mainImg
    this.rooms = res.rooms
    this.reviews = res.reviews
    this.reviews.reverse()
     this.userId= res.userId
     
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

  
this.checkRoomAvailable()
 }
 
 
  
}

viewChat(){
const navigationExtras:NavigationExtras={
  queryParams:{
    adminId:this.id,
    userId:this.userId
   
  }
}
this.route.navigate(['/chatpage'],navigationExtras)
}


// rating area  



latestReview:any

commetForm = new FormGroup({
  comment:new FormControl("",[Validators.required])
})

commentSubmit(){
  const comment = this.commetForm.value.comment
  const data = {comment,resort_id:this.data._id}
this.service.submitComment(data).subscribe((res:any)=>{
this.toaster.success("comment posted")
console.log(res);
this.latestReview = res._id
this.reviews.unshift(res)
this.commetForm.reset()
})

}


dropQuestion(){
  Swal.fire({
    title:"Drop question",
    text:"ask questions to improve our side",
    input:'text',
    showConfirmButton:true,
    showCancelButton:true
  }).then((result)=>{
    if(result.isConfirmed){
      const question = result.value
     const data ={question:question,id:this.id}
      this.service.dropQuestions(data).subscribe((res:any)=>{
        this.toaster.success(res.message)
      })

    }
  })
}

scrollBottom(){
  window.scrollTo(0,document.body.scrollHeight)
 
  
}

checkRoomAvailable(){
  const resortId  = this.id
  const roomId  = this.selectedRoomData._id
  const data  = {resortId:resortId,roomId:roomId,checkIn:this.FormData.value.checkin,checkOut:this.FormData.value.checkout}
this.service.checkAvailableOnDate(data).subscribe((res:any)=>{
  this.toaster.success(res.message)

  const room = this.selectedRoomData

  const room_id = room._id
  const resort_id = this.id

  const navigationExtras: NavigationExtras = {
    queryParams: {
      room_id: room_id,
      resort_id: resort_id,
    checkin:this.FormData.value.checkin,
    checkout:this.FormData.value.checkout,
    review_id:this.latestReview
    }
  };
  
  // Use the Router to navigate to the /checkout route with the parameters
  this.route.navigate(['/checkout'], navigationExtras);

},(err)=>{
  Swal.fire({
    text:err.error.message,
    icon:"warning",
    confirmButtonText:"Ok"
  })
})

}





}

