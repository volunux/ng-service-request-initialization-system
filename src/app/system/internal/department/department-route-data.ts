let $$ : { [key : string] : any } = {

		'systemType' : 'Department' ,

		'title' : 'Department' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Department' ,

		'link' : 'department' ,

		'$link' : 'department' ,

		'systemGuideline' : 'gen-internal'
};

export const DData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['num' , 'description' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['description' , 'num' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'shortCode' , 'status' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
