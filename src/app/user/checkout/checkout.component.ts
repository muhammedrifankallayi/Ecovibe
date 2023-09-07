import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

constructor(private activeroute:ActivatedRoute ,private service:UserService ,private toaster:ToastrService){}
parameter:any
resort_id:any
room_id:any
resortData:any
roomData:any


ngOnInit(): void {
  this.activeroute.queryParamMap.subscribe(params => {
    // Retrieve the query parameters
     this.room_id = params.get('room_id');
this.resort_id = params.get('resort_id');

    // Now, you can use room_id and resort_id in your checkout component
 
  });



 this.getResortdata()
 this.getRoomData()
}


getResortdata(){
this.service.getSingleView(this.resort_id).subscribe((res:any)=>{
  this.resortData = res.data
  this.toaster.success("Done")
})
}

getRoomData(){
  this.service.getRoomData(this.resort_id,this.room_id).subscribe((res:any)=>{
  this.roomData = res.data
  })
}



submit(){
  console.log(this.resort_id);

  
}

}
