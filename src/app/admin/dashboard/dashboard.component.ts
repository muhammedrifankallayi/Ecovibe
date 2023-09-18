import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import {Chart} from "chart.js"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
constructor(private service:AdminService , private toaster:ToastrService){}

bookingData:any
salesdata:any
totalBookings:any
totalSales:any
totalPictures:number  = 0
totalreviews : number  = 0
ratingAvg : number  =0
resort :any
totalSaleAmount:number|undefined
resortData:any
ngOnInit(): void {
 this.getData()
}


getData(){
  this.service.resortCharts().subscribe((res:any)=>{
    console.log(res.bookingdata);
    this.bookingData = res.bookingdata
    this.salesdata = res.salesdata
    this.totalBookings = res.totalBookings
    this.totalSales = res.totalSales | 0
  this.totalPictures = res.resort.images.length | 0
  this.totalreviews = res.totalreviews | 0
this.ratingAvg = res.avgRating
this.resort = res.resort.location

this.totalSaleAmount = res.totalSaleAmount  
this.resortData = res.resort
  
    this.toaster.show("Data got"+this.bookingData)
  this.graphs()
  },(err:any)=>{
    this.toaster.error(err.error.message)
  })
}




graphs(){

  const ctx = document.getElementById("myChart") as HTMLCanvasElement
  const ctx2 = document.getElementById("myChart2") as HTMLCanvasElement
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
      datasets: [{
        label: 'Sales Count',
        data: this.salesdata
       
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
  
   
    
    }
  })



  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
      datasets: [{
        label: 'Sales',
        data:this.bookingData
        

      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  })



}


}
