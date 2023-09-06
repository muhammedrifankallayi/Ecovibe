import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {

constructor(private activeRoute:ActivatedRoute ,private route:Router ,private service:UserService){
 
}

id:string=''
data:any
showImg:any
rooms:any



  ngOnInit(): void {
    
    this.activeRoute.queryParams.subscribe((params)=>{
      this.id = params['id']
    
    })


this.datas()





  }


datas(){
  this.service.getSingleView(this.id).subscribe((res:any)=>{
    this.data = res.data
    console.log(res.data);
    this.showImg = res.mainImg
    this.rooms = res.rooms
   })
   

   
}

adults=0
children=0


increaseChildren(){
this.children= this.children+1
}
decreaseChildren(){
  if(this.children!=0){
    this.children= this.children-1
  }
 


}
increaseAdults(){
 this.adults =   this.adults+1
}

decreaseAdults(){
  if(this.adults!=0){

    this.adults =  this.adults-1

  }

}



}
