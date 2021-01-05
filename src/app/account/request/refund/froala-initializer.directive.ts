import { Directive , Inject , Input } from '@angular/core';

import { DOCUMENT } from '@angular/common';
​
import { AppComponent } from '../../../app.component';


@Directive({

  'selector' : '[appFroalaInitializer]'

})

export class FroalaInitializerDirective {

  constructor(@Inject(DOCUMENT) private readonly document: any) { 

  }

  public cleaner : any = {'clean' : () => {

    return setTimeout(() => { let logo = this.document.getElementById('fr-logo');

          if (logo) { logo.parentNode.removeChild(logo);

            this.cleaner.clean = null;  }  } , 0);  }
    }
​
  ngOnInit() {

  }

  ngDoCheck() {  

    if (this.cleaner.clean) { this.cleaner.clean();  }

  }

  ngOnDestroy() {

  }

}