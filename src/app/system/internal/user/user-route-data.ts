let $$ : { [key : string] : any } = {

		'systemType' : 'User' ,

		'title' : 'User' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User' ,

		'link' : 'user' ,

		'$link' : 'admin/user' ,

		'systemGuideline' : 'gen-internal'
};

export const UData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'view' : 'ca' , 'controlFilters' : ['num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['description' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'shortCode' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` ,

	'searchFilters' : { 'role' : 'Role' , 'emailAddress' : 'Email Address' , 'level' : 'Level' , 'identityNumber' : 'Identity Number' , 'status' : 'Status' } } ,

};