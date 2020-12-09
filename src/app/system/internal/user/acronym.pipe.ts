import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  
  'name' : 'acronym'

})

export class AcronymPipe implements PipeTransform {

  transform(value: string, ...args: string[]) : string {

  	let $value = value.replace(/and/gi , '').split(' ');

  	if ($value.length > 1) {

   return $value.map((item) => {	if (item) {	return item[0];	}	

    							else { return '';  }	}).join('');	}
		
		else {	return $value.join('');	}

  }

}
