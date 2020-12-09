export interface GeneralRequest {

	[key : string] : any;

	message? : string;

	requestUsername? : string;

	requestPassword? : string;

	documemts? : { [key : string] : string }[];

	requestType? : { [key : string] : any } | string;

	applicationNumber? : string;

	num? : number;

	author? : { [key : string] : any } | string;

	entryHandler? : { [key : string] : any } | string;

	unit? : { [key : string] : any } | string;

	status? : string;

	secondaryKey? : string;

	slug? : string;

	timeline? : { [key : string] : any };
	
} 