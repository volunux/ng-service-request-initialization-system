import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({

  'selector' : '[appCapitalize]'

})

export class CapitalizeDirective {

  constructor(public el : ElementRef) { 

  }

  @HostListener('input') public capitalize(field : string) : void { let i = 0;

  	let $entry = this.el.nativeElement.value.replace(/\s+/g , ' ').split(' ')

							.map((n) => {	return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase();	}).join(' ');

  	this.el.nativeElement.value = $entry;

  }

  ngOnInit() {

  }

}
