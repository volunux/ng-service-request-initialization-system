import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  
  'name' : 'replaceTabs'

})

export class ReplaceTabsPipe implements PipeTransform {

  transform(value : string, ...args : string[]) : string {

    return value.replace(/\t/g , '&emsp;')

    	.replace('ql-align-center' , 'center');

  }

}
