import { Component, ElementRef, Input, ViewChild ,OnInit ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit ,AfterViewInit {
  @ViewChild('inputField')
  inputField!: ElementRef;


@Input() placeholder = '';
autocomplete : google.maps.places.Autocomplete | undefined

ngOnInit(): void {
  
}

ngAfterViewInit(): void {
  this.autocomplete = new google.maps.places.Autocomplete(this.inputField.nativeElement);
  this.autocomplete.addListener('place_changed',()=>{
    const place = this.autocomplete?.getPlace();
    console.log(place);
    
  })
    
}



}
