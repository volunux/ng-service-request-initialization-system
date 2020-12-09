export interface Department {

	_id : string;

	name? : string;

	createdAt : Date;

	updatedAt? : Date;

	author? : string;

	department? : string;

	faculty? : string;

	Faculty? : string[];

	Department? : string[];

	shortCode : string;

	secondaryKey : string;

	num : number;

}

export class DepartmentInstance {

	constructor(public _id : string , public name : string , public createdAt : Date , 

							public updatedAt : Date , public shortCode : string , public faculty : string ,

							public secondaryKey : string , public num : number) {

			this._id = _id || '';

			this.name = name || '';

			this.createdAt = createdAt || new Date();

			this.updatedAt = updatedAt || new Date();

			this.faculty = faculty || '';

			this.shortCode = shortCode || '';

			this.secondaryKey = secondaryKey || '';

			this.num = num || 0;
	}

}