import { Component , OnInit} from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

constructor(private service:AdminService){}

bookingData:any

ngOnInit(): void {
this.getData()
}

getData(){
  this.service.getBooking().subscribe((res:any)=>{
this.bookingData = res
  })
}


cancelBooking(id:string){

Swal.fire({
  title:"Cancel booking??",
  text:"Are you sure to cancel this booking",
  icon:"question",
  confirmButtonText:"Yes",
  showCancelButton:true,
  cancelButtonText:"No"
}).then((result)=>{
  if(result.isConfirmed){
    this.service.cancelBooking(id).subscribe((res)=>{
      Swal.fire({
        timer:1000,
        title:"Booking Cancelled",
        confirmButtonText:"Ok",
        icon:"success",
        
      })
    },(err:any)=>{
      console.log(err.error.message);
      Swal.fire({
        title:"Sorry",
        text:err.error.message,
        confirmButtonText:"Ok",
        icon:"error"
      })
      
    })
  }
})


 
}



}
