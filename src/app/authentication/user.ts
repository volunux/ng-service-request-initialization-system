import { FormControl } from '@angular/forms';

export class User {

	constructor(public _id? : string , public emailAddress? : string , public username? : string , public role? : string ,

							public department? : string , public faculty? : string , unit? : string , public status? : string , public exp? : string ,

							public matriculationNumber? : string , public identityNumber? : string , public password? : string , public about? : string ,

							public firstName? : string , public lastName? : string) {


	}
 }

 export class UserFormModel {

	constructor(public _id? : FormControl , public emailAddress? : FormControl , public username? : FormControl , public role? : FormControl ,

							public department? : FormControl , public faculty? : FormControl , unit? : FormControl , public status? : FormControl ,

							public matriculationNumber? : FormControl , public identityNumber? : FormControl , public password? : FormControl , public about? : FormControl ,

							public firstName? : FormControl , public lastName? : FormControl) {


	}
 }

export interface Payload {

	s_id : string;

	token : string;
}