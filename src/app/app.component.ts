import { Component , OnInit } from '@angular/core';

import { RouterOutlet , Router , RouterEvent , RouteConfigLoadEnd , RouteConfigLoadStart } from '@angular/router';

import { slideInAnimation } from './animations';

import { AuthenticationService } from './authentication/authentication.service';

@Component({

  'selector' : 'app-root',
  
  'templateUrl' : './app.component.html',
  
  'styleUrls' : ['./app.component.css'] ,

  'animations' : [slideInAnimation] ,

})

export class AppComponent implements OnInit {

  public title : string = 'Request and Service Initialization System';

  public isShowingRouteLoadIndicator: boolean;

  constructor(private as : AuthenticationService , private router : Router) {

    this.isShowingRouteLoadIndicator = false;

    var asyncLoadCount = 0;

router.events
        .subscribe((event: RouterEvent) : void => {
 
        if (event instanceof RouteConfigLoadStart ) { asyncLoadCount++;  }

        else if (event instanceof RouteConfigLoadEnd) { asyncLoadCount--;  }
 
        // If there is at least one pending asynchronous config load request,
        // then let's show the loading indicator.
        // --
        // CAUTION: I'm using CSS to include a small delay such that this loading
        // indicator won't be seen by people with sufficiently fast connections.
        this.isShowingRouteLoadIndicator = !!asyncLoadCount;
 
      });

  }

  
  public token : string;

  public myDetails : any;

  public ngOnInit() : void {



  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
