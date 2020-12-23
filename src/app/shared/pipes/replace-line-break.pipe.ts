import { Pipe , PipeTransform } from '@angular/core';

@Pipe({

  'name' : 'replaceLineBreak'

})

export class ReplaceLineBreakPipe implements PipeTransform {

  transform(value : string, ...args : string[]): string {
    
    return value.replace(/\n/g , '<br/>');

  }

}
