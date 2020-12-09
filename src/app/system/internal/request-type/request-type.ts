export interface RequestType {

	_id : string;

	name : string;

	shortCode : string;

	description : string;

	status : string;

	num : number;

	createdAt? : Date;

	updatedAt? : Date

}

export class RequestTypeInstance {

	constructor(public _id : string , public name : string , public description : string , public shortCode : string ,

							public status : string , public num : number , public createdAt : Date , public updatedAt : Date ) {

			this._id = _id || '';

			this.name = name || '';

			this.shortCode = shortCode || '';

			this.description = description || '';

			this.status = status || '';

			this.num = num || 0;

			this.createdAt = createdAt || new Date();

			this.updatedAt = updatedAt || new Date();

	}

}