import { Component ,OnInit } from '@angular/core';
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit  {

constructor(private service:SuperAdminService){}

data:any
ngOnInit(): void {
  
this.service.getRequests().subscribe((result:any)=>{
   this.data = result.Data
   console.log(this.data);
})



console.log("haii");



}


  values:boolean = true

  sidebarToggled(value:boolean){
  this.values = value
  }

  showPop(item:any){
    Swal.fire({
      title: 'Resort Information',
      html: `<table style="width: 100%;">
                <tr>
                  <td style="width: 30%; text-align: right;"><strong>Location:</strong></td>
                  <td style="width: 70%;">${item.location}</td>
                </tr>
                <tr>
                  <td style="text-align: right;"><strong>Address:</strong></td>
                  <td>${item.resortAdress}</td>
                </tr>
                <tr>
                  <td style="text-align: right;"><strong>Phone:</strong></td>
                  <td>${item.mobile}</td>
                </tr>
                <tr>
                  <td style="text-align: right;"><strong>Email:</strong></td>
                  <td>${item.email}</td>
                </tr>
                <tr>
                  <td style="text-align: right;"><strong>Occupancy:</strong></td>
                  <td>${item.occupency}</td>
                </tr>
              </table>`,
      icon: 'info',
      confirmButtonText: 'OK',
      customClass: {
        container: 'custom-swal-container',
      },
    });
    
    
  }


  approve(id:string){
    this.service.approveRequest(id).subscribe((res:boolean)=>{
      Swal.fire({
        title:"Approved Successfull",
        icon:"success",
        confirmButtonText:"OK"
      })
    })
  }

  reject(id:string){
  this.service.rejectedReqest(id).subscribe((res)=>{
    Swal.fire({
      title:"Rejected Successfull",
      icon:"success",
      confirmButtonText:"OK",
      confirmButtonColor:"red"
    })
  })
  }



}
