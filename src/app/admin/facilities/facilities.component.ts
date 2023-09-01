import { Component, OnInit } from '@angular/core';
import { Restaurant, Amenties, Surroundings, items } from '../state/types/admintype';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  ngOnInit(): void {
    this.service.getRestaurantData().subscribe((res: any) => {
      this.restaurants = res.data
    })
    this.service.getSurrounding().subscribe((res: any) => { this.surroundingArray = res.data })

  this.service.getAmenties().subscribe((res:any)=>{  this.amenties = res.data  })
  }
  constructor(private service: AdminService) { }

  action: boolean = true

  handleSidebarToggle(value: boolean) {
    this.action = value
  }

  // variables

  //restaurants
  restaurant: string = '';
  distance: number | undefined

  //amenties
  amenti: string = ''
  description: string = ''
  //surroundings
  surrounding: string = ''
  surr_description: string = ''
  surr_distance: number | undefined

  //items

  place_distance: number | undefined;
  place: string = ''







  restaurants: Restaurant[] = []
  amenties: Amenties[] = []
  item: items[] = []
  surroundingArray: Surroundings[] = []


  // facilities adding section

  addTask() {
    if (this.restaurant.trim() !== '') {

      const data = { restaurant: this.restaurant, distance: Number(this.distance), completed: false }
      this.service.facilityRestaurant(data).subscribe((res: any) => {
        this.restaurants = res.data
        console.log(res.data);


      })
      this.restaurant = '';
    }
  }

  addAmenties() {
    if (this.amenti.trim() !== '') {
      this.amenties.push({ name: this.amenti, description: this.description, is_list: true });

      const data = { name: this.amenti, description: this.description, is_list: true }
      this.service.addAmenties(data).subscribe((res) => {
        Swal.fire({
          timer: 900,
          icon: "success",
          title: "Amenties added"
        })
      })

      this.amenti = '';
    }
  }

  addSurroundings() {
    if (this.surrounding.trim() !== '' && this.surr_description.trim() !== '') {
      this.surroundingArray.push({ type_name: this.surrounding, description: this.surr_description, is_list: true, items: this.item })
      const data = { type_name: this.surrounding, description: this.surr_description }
      this.service.facilitySurroundings(data).subscribe((res: any) => {
        alert("goooooooooooood")
        this.surrounding = ''
        this.surr_description = ''
      })
    }
  }
  additems(index: number, name: string, distance: string, surr: string) {
    if (name.trim() !== '' && distance !== undefined) {

      this.surroundingArray[index].items.push({ name: name, distance_From_Resort: Number(distance) })
      const data = { name: name, distance_From_Resort: Number(distance), type_name: surr }
      this.service.facilityItemsSurr(data).subscribe((res) => [
        alert("successs")
      ])

    }
  }

  // Facility deletion section


  deleteTask(index: number, name: string) {
    this.restaurants.splice(index, 1);
    this.service.deleteRestaurant(name).subscribe((res) => {
      alert("restaurant deleted")
    })

  }


  deleteAmenti(index: number,data:string) {
    this.amenties.splice(index, 1);
    this.service.deleteAmenties(data).subscribe((res)=>{
      Swal.fire({
        icon:"success",
        timer:900,
        title:"deleted Successfully"
      })
    })
  }


  deleteSurroundings(index: number, name: string) {
    this.surroundingArray.splice(index, 1)
    this.service.deleteSurroundings(name).subscribe((res) => {
      alert("deleted")
    })
  }





}

