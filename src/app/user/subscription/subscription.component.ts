import { Component ,OnInit ,NgZone} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

declare const  Razorpay : any

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})






export class SubscriptionComponent implements  OnInit{

  constructor(private service:UserService ,private toaster:ToastrService ,private router:Router ,private activatedRoute:ActivatedRoute,private ngzone:NgZone){}

  cardItems: any[] = [];
  FromAdmin:boolean= false

  adminId:any
 

  ngOnInit() {

this.service.getSubscriptionData().subscribe((res:any)=>{
     this.cardItems = res.data
     this.activatedRoute.queryParamMap.subscribe((params)=>{
    this.adminId = params.get("id")
   if(params.get("id")){
    this.FromAdmin = true
   }
     })
})

    
  }

  makeSubcription(subcriptionId:string,price:number){

  
  this.service.isAdmin(this.adminId).subscribe((res)=>{

 


    const options = {
      key: 'rzp_test_EPM97YtygusiKT',
      amount: price, // Amount in paise (1 INR = 100 paise)
      currency: 'INR',
      name: 'Ecovibe',
      description: 'Subscription purchase',
      image: 'assets/logo-png-removebg-preview (2).png',
      handler: (response: any) => {
        if (response.razorpay_payment_id) {
          const paydata={
            amount:price,
           id:subcriptionId,
           userId:this.adminId?this.adminId:null,
            paymentId:response.razorpay_payment_id
          }
      
          
          this.service.pusrchaseSubcription(paydata).subscribe((res:any)=>{
    
    
            Swal.fire({
              icon: 'success',
              title: 'Payment successfull!',
              text: 'Congratulations! Your ' +res.message,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
          })
        
            this.toaster.success(res.message)
            if(this.FromAdmin){
              this.ngzone.run(()=>{
                this.router.navigate(['/admin/dashboard']);
                this.toaster.success('Payment successful!');
              })
             
            }else{
              this.router.navigate(['/bookingdone']);
              this.toaster.success('Payment successful!');
            }
           
    
          },(err:any)=>{
            Swal.fire({
              title:"Failed",
              text:err.error.message,
              icon:'warning',
              confirmButtonText:"OK"
            })
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

  },(err:any)=>{
    Swal.fire({
      title:"Something Wrong!!",
      text:err.error.message,
      icon:"warning",
      confirmButtonText:'OK'
    })
  })

  }



}
