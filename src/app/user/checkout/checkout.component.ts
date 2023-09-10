import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';


declare const  Razorpay : any



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private service: UserService, private toaster: ToastrService , private router:Router) { }
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
  terms_conditions:new FormControl(false,Validators.required),
  age: new FormControl("",[Validators.required,Validators.maxLength(2)]),
  email : new FormControl("",[Validators.required,Validators.email]),
  name : new FormControl("",[Validators.required]) ,
  address :  new FormControl("",[Validators.required]),
  mobile: new FormControl("",[Validators.required]),
  resort_id  : new FormControl(),
  room_id: new FormControl()
 
})


get nameControl(){
  return this.FormData.get("name")
}
get ageControl(){
  return this.FormData.get("age")
}
get emailControl(){
  return this.FormData.get("email")
}
get addressControl(){
  return this.FormData.get("address")
}
get mobileControl(){
  return this.FormData.get("mobile")
}
get termsControl(){
  return this.FormData.get(" terms_conditions")
}


  

  OnSubmit() {
    console.log(this.resort_id);
const data = this.FormData.value

data.resort_id = this.resort_id
data.room_id = this.room_id

console.log(data);


this.service.placeBooking(data).subscribe((res:any)=>{


  
  
  
  const options = {
    key: 'rzp_test_EPM97YtygusiKT',
    amount: 444 * 100, // Amount in paise (1 INR = 100 paise)
    currency: 'INR',
    name: 'Ecovibe',
    description: 'Booking advance amount',
    image: 'assets/logo-png-removebg-preview (2).png',
    handler: (response: any) => {
      if (response.razorpay_payment_id) {
        const paydata={
          amount:res.amount,
          booking_id : res._id,
          paymentId:response.razorpay_payment_id
        }
    
        
        this.service.confirmBooking(paydata).subscribe((res:any)=>{
  
  
          Swal.fire({
            icon: 'success',
            title: 'Subscription Redeemed!',
            text: 'Congratulations! Your subscription has been successfully redeemed.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        })
          this.toaster.success(res.message)
          this.router.navigate(['profile'])
          this.toaster.success('Payment successful!');
  
        },(err:any)=>{
  
          this.toaster.error('Payment failed somthing wrong..!')
          this.toaster.error(err.error.message);
  
  
        })
      } else {
        this.toaster.error('Payment failed.');
      }
    }
  };
  
  const razorpayInstance = new Razorpay(options);
  razorpayInstance.open();



  
})



// 





//



  }





}
