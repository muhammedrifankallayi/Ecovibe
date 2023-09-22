import { Component  , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-category-wise',
  templateUrl: './category-wise.component.html',
  styleUrls: ['./category-wise.component.css']
})
export class CategoryWiseComponent implements OnInit {


  CopyText:string=''
  resorts:any
category=''
dataStatus:boolean = true

msgs=''



constructor(private activetedroute:ActivatedRoute , private service:UserService , private toaster:ToastrService ,private router:Router){}
ngOnInit(): void {
  this.activetedroute.queryParams.subscribe((params)=>{
    this.category = params['category']
  })
this.getData()
}

getData(){
  this.service.categoryWise(this.category).subscribe((res)=>{
 this.resorts = res
  },(err:any)=>{
  this.dataStatus = false
this.msgs = err.error.message
  })
}


addToWhishlist(id:string){

  this.service.addToWishList(id).subscribe((res)=>{
    this.toaster.success("added to whishlist")
    
  },(err)=>{
    this.toaster.error(err.error.message)
  })
  
    }



    showDetails(id:string){
      const queryParams = {id:id}
      this.router.navigate(['/singleView'],{queryParams:queryParams})
     
    }


}
