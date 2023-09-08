import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(value: string, divider: number): number {
if(divider===0){
  throw Error("divition with zero is not possible")
}

const digit  = Number(value)

    return digit/divider;
  }

}
