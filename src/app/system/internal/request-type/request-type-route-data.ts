let $$ : { [key : string] : any } = {

		'systemType' : 'Request Type' ,

		'title' : 'Request Type' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Type' ,

		'link' : 'request-type' ,

		'$link' : 'request-type' ,

		'systemGuideline' : 'gen-internal'
};

export const RTData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'shortCode' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
