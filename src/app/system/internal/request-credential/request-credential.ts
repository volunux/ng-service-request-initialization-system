export interface RequestCredential {

	_id : string;

	requestUsername : string;

	requestPassword : string;

	status : string;

	num : number;

	createdAt? : Date;

	updatedAt? : Date

}

export class RequestCredentialInstance {

	constructor(public _id : string , public requestUsername : string , public requestPassword : string ,

							public status : string , public num : number , public createdAt : Date , public updatedAt : Date ) {

			this._id = _id || '';

			this.requestUsername = requestUsername || '';

			this.requestPassword = requestPassword || '';

			this.status = status || '';

			this.num = num || 0;

			this.createdAt = createdAt || new Date();

			this.updatedAt = updatedAt || new Date();

	}

}