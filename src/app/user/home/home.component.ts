import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor(private service:UserService, private route:Router){

}

  resorts:any

  ngOnInit(): void {
    this.service.getResorts().subscribe((res:any)=>{
  this.resorts = res.data

    })
  }


  showDetails(id:string){
    const queryParams = {id:id}
    this.route.navigate(['/singleView'],{queryParams:queryParams})
   
  }

 
}
