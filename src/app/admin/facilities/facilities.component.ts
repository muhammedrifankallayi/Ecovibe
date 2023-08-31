import { Component } from '@angular/core';
import { Restaurant , Amenties ,Surroundings } from '../state/types/admintype';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {


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







restaurants: Restaurant[] = [
  { restaurant: 'Buy groceries',distance:7, completed: false },
  { restaurant: 'Clean the house',distance:45, completed: true },
  { restaurant: 'Go for a walk',distance:78, completed: false }
];


amenties:Amenties[]=[
  {amenti:"swimming",description:"200sqFeet swimming poool",list:true}
]

surroundingArray:Surroundings[]=[
{name:"Water falls",description:"largest water falls in india",distance:10,list:true}

]


// facilities adding section

addTask() {
  if (this.restaurant.trim() !== '') {
    this.restaurants.push({ restaurant: this.restaurant,distance:Number(this.distance), completed: false });
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
    this.surroundingArray.push({name:this.surrounding,description:this.surr_description,distance:Number(this.surr_distance),list:true})
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

