export class UserOther {

	public faculty : string[];

	public department : string[];

	public unit : string[];

	public level : string[];

	public country : string[];

	constructor(data) {

		this.faculty = data.Faculty ? data.Faculty : [];

		this.department = data.Department ? data.Department : [];

		this.unit = data.Unit ? data.Unit : [];

		this.level = data.Level ? data.Level : [];

		this.country = data.Country ? data.Country : [];

	}

}
