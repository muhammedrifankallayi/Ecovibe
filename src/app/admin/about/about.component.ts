import { Component ,OnInit} from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{


ngOnInit(): void {
  this.getResortData()
}

constructor( private service:AdminService  ){}

  action:boolean = true
  sidebarToggled(value:boolean){
   this.action = value
  }

resortData:any
user:any

  getResortData(){
    this.service.getResort().subscribe((res:any)=>{
 this.resortData = res.resort
 this.user = res.user
    })
  }

}
