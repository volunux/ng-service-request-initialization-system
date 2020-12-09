let $$ : { [key : string] : any } = {

		'systemType' : 'Request Credential' ,

		'title' : 'Request Credential' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Credential' ,

		'link' : 'request-credential' ,

		'$link' : 'request-credential' ,

		'systemGuideline' : 'gen-internal'
};

export const RCData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['num' , 'description' , 'faculty' , 'shortCode'] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['description' , 'num' , 'faculty' , 'shortCode' , 'requestPassword' ] , 'noEdit' : false } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'shortCode' , 'status' , 'faculty' ] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'requestUsername' : 'Request Username' , 'status' : 'Status'} } ,

};
