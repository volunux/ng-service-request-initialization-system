let $$ : { [key : string] : any } = {

		'systemType' : 'Reply' ,

		'title' : 'Reply' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Reply' ,

		'link' : 'reply' ,

		'$link' : 'reply' ,

		'systemGuideline' : 'gen-internal'
};

export const RData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['_id' , 'num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'num' , 'status' , 'entrySlug'] , 'noEdit' : false } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'num' , 'status'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'slug' : 'Slug' } } ,

};
