import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private service: UserService, private toaster: ToastrService) { }
  parameter: any
  resort_id: any
  room_id: any
  resortData: any = []
  roomData: any = []


  ngOnInit(): void {
    this.activeroute.queryParamMap.subscribe(params => {

      this.room_id = params.get('room_id');
      this.resort_id = params.get('resort_id');
    });

    this.getResortdata()

  }


  getResortdata() {
    this.service.getRoomData(this.resort_id,this.room_id).subscribe((res: any) => {
      this.resortData = res.resortData
      this.roomData = res.room[0]
    
      console.log(this.roomData);
      
      this.toaster.success("Done")
    })
  }
  
  
FormData = new FormGroup({
  terms_conditions:new FormControl("",Validators.required),
  age: new FormControl("",[Validators.required,Validators.maxLength(2)]),
  email : new FormControl("",[Validators.required,Validators.email]),
  name : new FormControl("",[Validators.required]) ,
  address :  new FormControl("",[Validators.required]),
  mobile: new FormControl("",[Validators.required])
})





  

  OnSubmit() {
    console.log(this.resort_id);


  }





}
