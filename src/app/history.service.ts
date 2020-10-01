import { Injectable } from '@angular/core';

import { Router , NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'

})

export class HistoryService {

  constructor(private router : Router) { 

 	this.router.events

  		.pipe(

  					filter((routerEvent) => { return routerEvent instanceof NavigationEnd;	})	)

  		.subscribe((navigation : NavigationEnd) => {

  				const url = navigation.urlAfterRedirects;

  				this.urls = [...this.urls , url]		});

  }

  public getPreviousLink() : string {

  	let length = this.urls.length;

  		return length ? this.urls[length - 2] : '/';

  }

  public getLastNonAuthLink() : string {

  		let excludeLinks : string[] = ['signin' , 'signup'];

  		const filtered = this.urls.filter((url) => { return !excludeLinks.includes(url); } );

  		const length = filtered.length;

  		return length > 1 ? filtered[length - 1] : '/';

  }

  public urls : string[] = [];

}
