import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[],text:string): any[] {
   if(!data || !text){
    return data
   }

const searchText = text.toLocaleLowerCase()

return data.filter(item=>{
  return item.resortName.toLocaleLowerCase().includes(searchText) || item.location.toLocaleLowerCase().includes(searchText) 
})

  }

}
