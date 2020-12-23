let $$ : { [key : string] : any } = {

		'systemType' : 'Refund Stage' ,

		'title' : 'Refund Stage' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Refund Stage' ,

		'link' : 'refund-stage' ,

		'$link' : 'refund-stage' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'_id' : '1' , 'name' : 'Information Technology Services' , 'shortCode' : 'ITS' };

export const RSData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder	} ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , 

	placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'description' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
