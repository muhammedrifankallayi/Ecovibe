import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-hoster-req',
  templateUrl: './hoster-req.component.html',
  styleUrls: ['./hoster-req.component.css']
})
export class HosterReqComponent {


 
  constructor() {}

  ngOnInit() {
 
  }

  resortForm = new FormGroup({
    hosterName : new FormControl("",[Validators.required]),
    resortName : new FormControl("",[Validators.required]),
    address : new FormControl("",[Validators.required]),
    location : new FormControl("",[Validators.required]),
    mobile : new FormControl("",[Validators.required,Validators.minLength(10)]),
    type : new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    occupency : new FormControl("",[Validators.required])


   })

   OnSubmit(){
    console.log(this.resortForm.value);
    
   }

}
