import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
constructor(private service:AdminService , private toaster:ToastrService){}
ngOnInit(): void {
  this.service.resortCharts().subscribe((res)=>{
    console.log(res);
    this.toaster.show("Data got")
  },(err:any)=>{
    this.toaster.error(err.error.message)
  })
}

}
