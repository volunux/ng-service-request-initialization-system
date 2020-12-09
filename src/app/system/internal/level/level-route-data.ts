let $$ : { [key : string] : any } = {

		'systemType' : 'Level' ,

		'title' : 'Level' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Level' ,

		'link' : 'level' ,

		'$link' : 'level' ,

		'systemGuideline' : 'gen-internal'
};

export const LData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['description' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['description' , 'shortCode' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
