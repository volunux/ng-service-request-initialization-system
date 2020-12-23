let $$ : { [key : string] : any } = {

		'systemType' : 'Unit' ,

		'title' : 'Unit' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Unit' ,

		'link' : 'unit' ,

		'$link' : 'unit' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'Internet Credential' , 'description' : 'School Internet Facility Credential' , 'shortCode' : 'CSIF' };

export const UData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['_id' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder	} ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'description' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
