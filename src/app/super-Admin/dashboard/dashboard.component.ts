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


  getCharData(){
    this.service.getChartData().subscribe((res:any)=>{
   
      this.userCount = res.usercount

      this.chartLoad()
       
    })
   
  }

chartLoad() {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Jan', 'Feb', 'Mar','Apr','jun','jul','Aug','Sep',"Oct",'Nov',"Dec"],
      datasets: [{
        label: 'Sales',
        data: [100, 200, 300,400,500,600]
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
        data: this.userCount
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
   color:"red",
   
    
    }
  })
}

  

}
