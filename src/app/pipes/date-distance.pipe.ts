import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDistance'
})
export class DateDistancePipe implements PipeTransform {

 
  transform(value: string):any {
    const now = new Date();
    const date = new Date(value);
    console.log(date);
    
    const difference = now.getTime() - date.getTime()

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

   if(days>0){
    return days + `days ago`
   }else if(hours>0){
    return hours + "hours ago"
   }else if(minutes>0){
    return minutes + "minutes ago"
   }else{
    return seconds + "seconds ago"
   }
  }
  

}
