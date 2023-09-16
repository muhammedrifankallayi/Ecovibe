import { Component , OnInit} from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
import {Chart} from "chart.js"
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';



var arr = [0,0,9,9,9,0,0,0,0,0,6,2]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('sidebarState', [
      state('collapsed', style({
        width: '0px',  // Adjust width as needed
      })),
      state('expanded', style({
        width: '200px', // Adjust width as needed
      })),
      transition('collapsed <=> expanded', animate('250ms ease-in')),
    ]),
  ]
})
export class DashboardComponent  implements OnInit {
 constructor(private service:SuperAdminService){}
  values = true
  sidebarToggled(value: boolean):any{
     this.values=value
    
  }
 
  ngOnInit(): void {
this.getCharData()


  }

userCount:any
resorts:any
sales:any
saleAmountGraph:any
resortLenght:number|undefined
userLenght:number | undefined
saleLenght:number | undefined
salesAmount:number | undefined



  getCharData(){
    this.service.getChartData().subscribe((res:any)=>{
   
      this.userCount = res.usercount
      this.resorts = res.resortcount
      this.resortLenght = res.totalResorts
      this.userLenght = res.totalUsers
      this.sales = res.salesdata
      this.saleLenght = res.totalSales
      this.salesAmount = res.sales
      this.saleAmountGraph = res.saleAmountGraph
      this.chartLoad()
       
    })
   
  }

chartLoad() {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement;
  const ctx3 = document.getElementById('myChart3') as HTMLCanvasElement;
  const ctx4 = document.getElementById('myChart4') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
      datasets: [{
        label: 'Resorts',
        data: this.resorts
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

const j =     new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
      datasets: [{
        label: 'Users',
        data: this.userCount,
        backgroundColor: ['rgba(255, 0, 0, 0.5)',   
        "rgba(0, 0, 0, 0.5)",
        'hsla(240, 100%, 50%, 0.5)']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
   color:"red",
   
    
    }
  })

// sales data


new Chart(ctx3, {
  type: 'radar',
  data: {
    labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
    datasets: [{
      label: 'Sales',
      data: this.sales
     
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

 
  
  }
})

//sale Amount Graph

new Chart(ctx4, {
  type: 'polarArea',
  data: {
    labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
    datasets: [{
      label: 'SalesAmout per month ₹',
      data: this.saleAmountGraph
     
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

 
  
  }
})


}

  

}
