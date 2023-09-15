import { Component ,OnInit } from '@angular/core';
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {

  values:boolean = true;
  sidebarToggled(value: boolean):void{
    this.values=value
   
 }



 constructor(private service:SuperAdminService){}

resortData:any

ngOnInit(): void {
  this.service.getResorts().subscribe((res)=>{
this.resortData = res


  })
}

blockResort(id:string){
  this.service.blockResort(id).subscribe((res)=>{
    Swal.fire({
      timer:900,
      text:"Blocked successfully",
      icon:"success"
    })
    this.ngOnInit()
  })
}
unblockResort(id:string){
  this.service.unblockResort(id).subscribe((res)=>{
    Swal.fire({
      timer:900,
      text:"Unlocked successfully",
      icon:"success"
    })
    this.ngOnInit()
  })
  
}




}
