export interface Level {

	_id : string;

	name? : string;

	createdAt : Date;

	updatedAt? : Date;

	author? : string;

	shortCode : string;

	secondaryKey : string;

	num : number;

}

export class LevelInstance {

	constructor(public _id : string , public name : string , public createdAt : Date , 

							public updatedAt : Date , public shortCode : string ,

							public secondaryKey : string , public num : number) {

			this._id = _id || '';

			this.name = name || '';

			this.createdAt = createdAt || new Date();

			this.updatedAt = updatedAt || new Date();

			this.shortCode = shortCode || '';

			this.secondaryKey = secondaryKey || '';

			this.num = num || 0;
	}

}