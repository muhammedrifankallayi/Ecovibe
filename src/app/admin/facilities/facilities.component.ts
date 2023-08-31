import { Component } from '@angular/core';
import { Restaurant } from '../state/types/admintype';

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
restaurant: string = '';
distance:number | undefined

amenties:string | undefined;




restaurants: Restaurant[] = [
  { restaurant: 'Buy groceries',distance:7, completed: false },
  { restaurant: 'Clean the house',distance:45, completed: true },
  { restaurant: 'Go for a walk',distance:78, completed: false }
];

addTask() {
  if (this.restaurant.trim() !== '') {
    this.restaurants.push({ restaurant: this.restaurant,distance:Number(this.distance), completed: false });
    this.restaurant = '';
  }
}

deleteTask(index: number) {
  this.restaurants.splice(index, 1);
}



}

