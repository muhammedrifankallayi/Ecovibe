import { Component ,OnInit} from '@angular/core';
import { Restaurant , Amenties ,Surroundings,items } from '../state/types/admintype';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent  implements OnInit{
ngOnInit(): void {
  this.service.getRestaurantData().subscribe((res:any)=>{
    this.restaurants = res.data
  })
  this.service.getSurrounding().subscribe((res:any)=>{
     this.surroundingArray = res.data
  })
}
  constructor(private service:AdminService){}

  action:boolean = true

handleSidebarToggle(value:boolean){   
this.action = value 
}

// variables

//restaurants
restaurant: string = '';
distance:number | undefined

//amenties
amenti:string =''
description:string = ''
//surroundings
surrounding:string = ''
surr_description :string = ''
surr_distance:number|undefined

//items

place_distance:number|undefined;
place:string=''







restaurants: Restaurant[] =[]


amenties:Amenties[]=[
  {amenti:"swimming",description:"200sqFeet swimming poool",list:true}
]

item:items[]=[]

surroundingArray:Surroundings[]=[]


// facilities adding section

addTask() {
  if (this.restaurant.trim() !== '') {
   
    const data = { restaurant: this.restaurant,distance:Number(this.distance), completed: false }
this.service.facilityRestaurant(data).subscribe((res:any)=>{
 this.restaurants = res.data
 console.log(res.data);
 
  
})
    this.restaurant = '';
  }
}

addAmenties() {
  if (this.amenti.trim() !== '') {
    this.amenties.push({ amenti: this.restaurant,description:this.description,list:true });
    this.amenti = '';
  }
}

addSurroundings(){
  if(this.surrounding.trim()!==''&&this.surr_description.trim()!==''){
    this.surroundingArray.push({type_name:this.surrounding,description:this.surr_description,is_list:true,items:this.item})
    const data = {type_name:this.surrounding,description:this.surr_description}
    this.service.facilitySurroundings(data).subscribe((res:any)=>{
      alert("goooooooooooood")
    })
  }
}
additems(index:number,name:string,distance:string,surr:string){
if(name.trim()!==''&&distance!==undefined){
  
  this.surroundingArray[index].items.push({name:name,  distance_From_Resort:Number(distance)})
const data = {name:name,distance_From_Resort:Number(distance),type_name:surr}
  this.service.facilityItemsSurr(data).subscribe((res)=>[
    alert("successs")
  ])

}
}

// Facility deletion section


deleteTask(index: number) {
  this.restaurants.splice(index, 1);

}


deleteAmenti(index: number) {
  this.amenties.splice(index, 1);
}


deleteSurroundings(index: number){
  this.surroundingArray.splice(index,1)
}





}

