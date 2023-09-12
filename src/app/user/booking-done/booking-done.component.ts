import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-done',
  templateUrl: './booking-done.component.html',
  styleUrls: ['./booking-done.component.css']
})
export class BookingDoneComponent implements OnInit {


constructor(private activateroute:ActivatedRoute){}

checkIn:any
checkOut:any


ngOnInit(): void {
  this.activateroute.queryParamMap.subscribe((params)=>{
    this.checkIn = params.get("checkin")
    this.checkIn = params.get("checkout")
  })

}



}