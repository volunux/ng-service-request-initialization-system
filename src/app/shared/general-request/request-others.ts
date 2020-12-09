export class GeneralRequestOther {

	public faculties : string[];

	public departments : string[];

	public units : string[];

	public levels : string[];

	public countries : string[];

	constructor(data) {

		this.faculties = data.Faculty ? data.Faculty : [];

		this.departments = data.Department ? data.Department : [];

		this.units = data.Unit ? data.Unit : [];

		this.levels = data.Level ? data.Level : [];

		this.countries = data.Country ? data.Country : [];

	}

}
