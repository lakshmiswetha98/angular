import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(name: string): string   {
    if(name =="" || name==null)
     return "No Data Available";
     else
     return name; 
    }
  }


