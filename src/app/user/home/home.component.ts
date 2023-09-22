import { Component ,OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor(private service:UserService, private route:Router , private toaster:ToastrService){

}
CopyText:string=''
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

  addToWhishlist(id:string){

this.service.addToWishList(id).subscribe((res)=>{
  this.toaster.success("added to whishlist")
  
},(err)=>{
  this.toaster.error(err.error.message)
})

  }



  scrollBy100px() {

    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollAmount = (120 / 100) * windowHeight;

    // Scroll by the calculated pixel value
    window.scrollBy(0, scrollAmount);
    
  }


  categoryView(category:string){
    const queryParams = {category:category}

    this.route.navigate(['/categorywise'],{queryParams:queryParams})
  }
  
 
}
