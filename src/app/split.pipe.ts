import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splite'
})
export class SplitPipe implements PipeTransform {

  transform(description:string,limit:number): unknown {
    return description.split(/[\s-]/g).splice(0,limit).join(" ");
  }

}
