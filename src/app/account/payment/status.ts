export interface Status {

	name : string;

	status : string;
}

export const statuses : string[] = ['Pending' , 'Review' , 'Update' , 'Fulfilled' , 'Rejected' , 'Transferred'];

export const $entryUpdateStatus : string[] = ['Update' , 'Review' , 'Transferred'];