import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from 'src/app/user/search/search.component';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

constructor(private dialog:MatDialog){}

   action = true

  sidebarToggled(value:boolean){
  this.action = value
  }

  openUserDataTable() {
    const dialogRef = this.dialog.open(SearchComponent, {
      width: '600px',
      data: {
      }
    });
  }


}
