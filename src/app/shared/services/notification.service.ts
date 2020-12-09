import { Injectable } from '@angular/core';

@Injectable({
  
  'providedIn' : 'root'

})

export class NotificationService {

  public notificationAvailable : boolean = false;

  public notificationMessage : string = '';

  constructor() { 

  }

  public removeNotification() : void {

     this.notificationAvailable = false;

     this.notificationMessage = null
  }

  addNotification(message : string) : void {

  	this.notificationMessage = message;
  }

  notificationStatus() : boolean {

  	return this.notificationAvailable;
  }

  setNotificationStatus(status : boolean) : void {

  	this.notificationAvailable = status;
  }

  getNotificationMessage() : string {

  	return this.notificationMessage;
  }

}
