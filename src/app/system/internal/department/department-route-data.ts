let $$ : { [key : string] : any } = {

		'systemType' : 'Department' ,

		'title' : 'Department' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Department' ,

		'link' : 'department' ,

		'$link' : 'department' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Information and Media Technology' , 'description' : 'Information and Media' , 'shortCode' : 'IMT' };

export const DData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['_id' , 'num' , 'description' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder	 } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'description' , 'num' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder	} ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'description' , 'status' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true , placeholder	} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
