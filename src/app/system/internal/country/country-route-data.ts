let $$ : { [key : string] : any } = {

		'systemType' : 'Country' ,

		'title' : 'Country' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Country' ,

		'link' : 'country' ,

		'$link' : 'country' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'United Kingdom' , 'description' : 'The Great Britain' , 'shortCode' : 'UK'};

export const CData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['_id' , 'num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , 

	placeholder } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'description' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , 

	placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'description' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
