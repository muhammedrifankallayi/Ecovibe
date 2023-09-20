import { Component ,OnInit ,Inject} from '@angular/core';
import { MatDialog ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { RoomViewComponent } from '../room-view/room-view.component';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private service:UserService , private router:Router ,private toaster:ToastrService ,private dialog:MatDialog  ){}

ngOnInit(): void {
  this.getBookings()
}

bookingData:any
room:any

getBookings(){
  this.service.getBookings().subscribe((res:any)=>{
 this.bookingData = res.data.reverse()
 this.room = res.room
  },(err)=>{
    alert(err.error.message)
  })
}

Cancel(id:string){
  Swal.fire({
    icon:"question",
    title:"Booking Cancel ??",
    text:"Are you sure to cancel booking",
    confirmButtonText:"I'm sure",
    showCancelButton:true,
    cancelButtonText:"No"
  }).then((result)=>{
    if(result.isConfirmed){
   this.service.CancelBooking(id).subscribe((res:any)=>{
    this.toaster.show("cancelled")
    this.ngOnInit()
   })
    }
  })
}



viewResort(id:string){
  const queryParams = {id:id}
  this.router.navigate(['/singleView'],{queryParams:queryParams})

}

ViewRoomdata(id:string,id2:string){
  this.dialog.open(RoomViewComponent,{
    width:"800px",
    data:{roomId:id,resortId:id2}
  })
}

roomShow:boolean = false
roomdata(){
  this.roomShow = true
this.toaster.success("works")

}

}
