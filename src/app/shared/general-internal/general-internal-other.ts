import { General } from '../interfaces/general';

export class GeneralInternalOther {

	public faculty : General[];

	constructor() {

	}

	public static processEntries(data? : General)  : General {

		let confirmData : General = {}

    for (let $prop in data) { let propVal = $prop.toLowerCase();

      confirmData[propVal] = data[$prop];	}

      return confirmData;

	}

}