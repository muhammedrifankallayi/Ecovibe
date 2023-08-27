import { Component ,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSubsComponent } from '../add-subs/add-subs.component';
import { Store,select } from '@ngrx/store';
import { loadsubscription } from '../state/user/user.actions';
import { selectSubscription,selectSubscriptionLoading,selectSubscriptionLoaded } from '../state/user/user.selecter';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
 ngOnInit(): void {
   this.store.dispatch(loadsubscription())
   this.getSubscriptions()
 }
constructor(private dialog:MatDialog, private store:Store){}

   action = true
   subscription$:any|null

  sidebarToggled(value:boolean){
  this.action = value
  }

  openUserDataTable() {
    const dialogRef = this.dialog.open(AddSubsComponent, {
      width: '600px',
      data: {
      }
    });
  }

loaded$ = this.store.select(selectSubscriptionLoaded);
loading$ = this.store.select(selectSubscriptionLoading)



  getSubscriptions(){
console.log("haii");

this.store.pipe(select(selectSubscription)).subscribe((res:any)=>{
 this.subscription$ = res.data
 console.log("succeess");
 console.log(res);
 
 
})

  }


}
