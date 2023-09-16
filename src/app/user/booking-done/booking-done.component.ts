import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-booking-done',
  templateUrl: './booking-done.component.html',
  styleUrls: ['./booking-done.component.css']
})
export class BookingDoneComponent implements OnInit {


constructor(private activateroute:ActivatedRoute ,private service:UserService , private router:Router , private toater : ToastrService){}

checkIn:any
checkOut:any
review_id:any


ngOnInit(): void {
  this.activateroute.queryParamMap.subscribe((params)=>{
    this.checkIn = params.get("checkin")
    this.checkOut = params.get("checkout")
    this.review_id = params.get("review_id")
  })

}

rated:number = 0 

rate(value:number){
  this.rated= value
  console.log(value);
  this.submit()
}


submit(){
const data = {id:this.review_id,value:this.rated}
  if(this.rated!=0){
    this.service.submitRating(data).subscribe((res)=>{
      this.toater.show(`happy for ${this.rated} rating`)
    })
  }
}





}