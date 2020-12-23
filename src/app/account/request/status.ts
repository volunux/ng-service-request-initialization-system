export interface Status {

	name : string;

	status : string;
}

export const statuses : string[] = ['Pending' , 'Review' , 'Update' , 'Fulfilled' , 'Rejected' , 'Transferred'];

export const $entryUpdateStatus : string[] = ['Update' , 'Review' , 'Transferred'];

export const $entryUpdateStatus2 : { [key : string] : string } = {

	'Fulfilled' : 'Fulfilled' ,

	'Rejected' : 'Rejected' ,

	'Update' : 'Update'

};