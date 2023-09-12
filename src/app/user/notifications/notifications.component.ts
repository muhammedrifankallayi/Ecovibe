import { Component ,OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit  {

constructor(private service:UserService){}

data:any

ngOnInit(): void {
  this.service.getNotification().subscribe((res:any)=>{
   this.data = res.data
  })
}


}
