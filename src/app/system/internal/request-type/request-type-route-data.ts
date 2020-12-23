let $$ : { [key : string] : any } = {

		'systemType' : 'Request Type' ,

		'title' : 'Request Type' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Type' ,

		'link' : 'request-type' ,

		'$link' : 'request-type' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'name' : 'School Email Password' , 'description' : 'Recovery to School Email Password' , 'shortCode' : 'REPSP' };

export const RTData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['_id' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder	} ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , placeholder	} ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'description' , 'shortCode' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true , placeholder	} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
