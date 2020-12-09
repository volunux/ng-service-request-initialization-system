import { Component , OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({

  'selector' : 'app-notification-screen',

  'templateUrl' : './notification-screen.component.html',

  'styleUrls' : ['./notification-screen.component.css']

})

export class NotificationScreenComponent implements OnInit {

  constructor() { 

  }

  public notificationAvailable : boolean;

  public fadeIn : boolean;

  public fadeOut : boolean;

  @Output() public finished : EventEmitter<boolean> = new EventEmitter();

  @Input('message') public notificationMessage : string;

  @Input() set notified(confirmed : boolean) {

  	this.notificationAvailable = confirmed;

  	if (confirmed) { this.fadeIn = true;

			this.fadeOutNotification();

  	}

  };

	get notified() {

  	return this.notificationAvailable;
  }

  public fadeOutNotification() {

    setTimeout(() => {

      this.fadeIn = false;

      this.fadeOut = true;

      this.removeNotification();

    } , 4000);
  }

  public removeNotification() {

    setTimeout(() => {

        this.finished.emit(true);

    } , 4000)
  }

  ngOnInit(): void {
  
  }

}
